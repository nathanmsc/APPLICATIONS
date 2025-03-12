# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.


## Development Server

Start the development server on `http://localhost:3000`:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc
nvm install 22.14.0
nvm use 22.14.0

node --version

npx nuxi init NUXT
npm install
npx nuxi build
npx nuxi dev
npx nuxi@latest module add usebootstrap 

```
---
# nuxt.config.ts
components: true,
---
#0E2647

#15417E

#6792cd
---
# Deploy on azure web static app
```
npx nuxi build --preset=azure
npx @azure/static-web-apps-cli start .output/public --api-location .output/server
```
---
```yaml
###### Repository/Build Configurations ######
app_location: '/'
api_location: '/github/workspace/.output/server'
output_location: '.output/public'
###### End of Repository/Build Configurations ######
```
---
```bash
{
  "routes": [
    {
      "route": "/index.html",
      "redirect": "/"
    },
    {
      "route": "/",
      "rewrite": "/api/server"
    }
  ],
  "platform": {
    "apiRuntime": "node:18"
  },
  "navigationFallback": {
    "rewrite": "/api/server"
  }
}
```
# Set Path to application
app_location: "/NUXT" # App source code path
api_location: ".output/server" # Api source code path - optional
output_location: ".output/public" # Built app content directory - optional

[deployment documentation](https://nuxt.com/docs/getting-started/deployment) 
[deployment on azure](https://nuxt.com/deploy/azure)
[swa cli](https://azure.github.io/static-web-apps-cli/docs/cli/swa-start/)
[Deployment Error resolved](https://github.com/Azure/static-web-apps/issues/1068)