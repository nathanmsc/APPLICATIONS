### INITIAL CONFIGURATIONS

Install NodeJS and Npm

```sh
apt install nodejs npm
```
---
Create nuxt project

```sh
npx create-nuxt-app@latest app
# Or
npx nuxi init APP
```
---
---
Run app nuxt locally on port 3000

```sh
npm run dev
```
install dependencies

```sh
npm init
npm install
npm install nuxt
```
---
Build for production and launch server

```sh
npm run build
npm run start
```
---
Generate static project

```sh
npm run generate
```
---
If proxy configured

```sh
#set proxy on npm
npm config set proxy "http://meu.endereco.proxy:80"
npm config set https-proxy "http://meu.endereco.proxy:80"
```
---
Remove  <NuxtWelcome /> in app.vue with your own code, or creating your own app.vue
```vue
<template>
  <div>
    <HomePage />
    <!--<NuxtRouteAnnouncer />-->
    <!--<NuxtWelcome />-->
  </div>
</template>
```

Create a basic structure (compontents, pages, layouts)

```sh
.
└── APP/
    ├── app.vue
    ├── components/
    │   ├── Header.vue
    │   ├── Content.vue
    │   └── Footer.vue
    ├── pages/
    │   ├── Home.vue
    │   └── Contact.vue    
    └── layouts/
        ├── default.vue
        └── custom.vue
```







