0. Configure Azure AD
- register application (SPA, set correct redirection url)
- expose API
- set correct client ID, scope (api), and authority

1. start server
```sh
cd server
ASPNETCORE_ENVIRONMENT=Development dotnet run 
```

2. start client
```
cd client
npm i
npm run serve
```