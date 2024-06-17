vue-portfolio/
│
├── public/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── scss/
│   ├── components/
│   │   ├── Header.vue
│   │   ├── Loader.vue
│   │   ├── Footer.vue
│   │   ├── About/
│   │   │   ├── Portfolio
│   │   │   │   ├── AllProjects.vue
│   │   │   │   ├── MobileProjects.vue
│   │   │   │   ├── WebProjects.vue
│   │   │   │   ├── ProjectsCard.vue
│   │   │   ├── Experince.vue
│   │   │   ├── Portfolio.vue
│   │   │   ├── Reviews.vue
│   │   │   ├── Services.vue
│   │   │   ├── Skills.vue
│   │   ├── Counter/
│   │   │   ├── Counter.vue
│   │   │   ├── CounterItem.vue
│   │   │   ├── CounterButton.vue
│   │   ├── Ecommerce/
│   │   │   ├── Ecommerce.vue
│   │   │   ├── StoreCard.vue
│   │   │   ├── CartFolder/
│   │   │   │   ├── Cart.vue
│   │   │   │   ├── EmptyCart.vue
│   │   ├── Todo/
│   │   │   ├── Todo.vue
│   │   │   ├── TodoInput.vue
│   │   │   ├── TodoItems.vue
│   ├── composables/
│   │   ├── loader.js
│   ├── layouts/
│   │   ├── DefaultLayout.vue
│   ├── store/
│   │   ├── store.js
│   │   ├── slices/
│   │       ├── Cart.js
│   │       ├── Todo.js
│   ├── views/
│   │   ├── AboutView.vue
│   │   ├── CartView.vue
│   │   ├── CounterView.vue
│   │   ├── EcommerceView.vue
│   │   ├── ProductDetailsView.vue
│   │   ├── TodoView.vue
│   │   ├── NotFoundView.vue
│   ├── App.vue
│   ├── main.js
├── .gitignore
├── README.md
├── package.json
├── vue.config.js

# Project goal
about: skills ,experince live projects and reviews
e-commerce: using fake api show products, see project details add project to cart , add same item more times avalible and delete item from cart and empty cart
todo: add todo list ,edit title of todo and delete todo from list
counter: start from 0 and click plus number increase 1 and click minus decrease number 1 
Not Found 404 page.

# Project features
Vue 3(composition api) in vite ,components, props, computed, composables ,event handel , lifecycle hooks , ref, reactive, components, router axios api and vuex state management

# Ui Tools
Bootstrap 5, scss , fontawsome and animation vue motion

# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/)

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

## Project Start

```sh
npm run dev
```

## Compile and Minify for Production

```sh
npm run build
```
