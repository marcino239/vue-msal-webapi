import Vue from 'vue/types'
import * as msal from '@azure/msal-browser'
import { InteractionRequiredAuthError } from '@azure/msal-common'

let msalInstance = null

class MsalHelper extends msal.PublicClientApplication {

    constructor(options: msal.Configuration) {
        super(options)
    }

    public callMSGraph(endpoint: any, accessToken: any) {
        const headers = new Headers()
        const bearer = `Bearer ${accessToken}`
        headers.append("Authorization", bearer)
        const options = {
            method: "GET",
            headers: headers
        }
        return fetch(endpoint, options)
            .then(response => response)
            .catch(error => console.log(error))
    }

    login(scopes: Array<string>) : Promise<msal.AuthenticationResult> {
        return this.loginPopup({ scopes })
    } 

    async getSilentToken(account: any, scopes = ["User.Read"]) {
        const silentRequest = { account, scopes }
        return await this.acquireTokenSilent(silentRequest).catch(error => {
            console.error(error)
            if (error instanceof InteractionRequiredAuthError) {
                // fallback to interaction when silent call fails
                return this.acquireTokenRedirect(silentRequest)
            }
        })
    }
}

export function MsalPlugin(vue: typeof Vue, options?: msal.Configuration): void {
    vue.prototype.$msal = new MsalHelper(options || {} )
}
