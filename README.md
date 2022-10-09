# tvmaze-vue

This app is created by `Vue 3`, `Bulma` and `Vitest` by using tvmaze api (https://www.tvmaze.com/api).

### Functionality

App has two tabs `Shows` and `Peoples`. Shows tab contains the all functionality such as displaying the shows, searching by query or category and ordering by date or rating. If you click one of the show item you will be navigated to show details where you can see the details, crew and episodes. Peoples tab is a fake tab to enhance the navigation functionality.

### Project structure

Under the src folder there are bunch of folders:

- Components: Dummy components such as ui-components which doesn't have heavy logic.
- Views : Wise components which fetch the data and pass it to dummy components.
- Services: Encapsulate the api logic
- Composables: Component facades which decrease the components complexity, interact with api service and map the data
- Utils: Involves pure function to map or sort items
- Types: Includes all typescript interfaces/types/enums.
- Constants: Includes constant variables
- Router: Includes the router file

Error and loading states are handled for each views and unit tests are covered with vitest. Most files are covered with around 90% coverage (a couple files left).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
