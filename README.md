# tvmaze-vue

This app is created by `Vue 3`, `Bulma` and `Vitest` by using tvmaze api (https://www.tvmaze.com/api).

### Functionality

App has two tab `Shows` and `Peoples`. Shows tab contains the all functionality such as displaying the shows, searching by query or category and ordering by date or rating. If you click one of the show items you will be navigated to show details where you can see the details, crew and episodes. Peoples tab is a fake tab to enhance the navigation functinality.

### Project structure

Under the src folder there are bunch of folders:

- Components: Dummy components such as ui-components which doesnt have heavy logic.
- Views : Wise components which fetch the data and pass it to dummy components.
- Services: Encapsulate the api logic
- Composables: Componenet facades which decrease the components complexity, interact with api service and map the data
- Utils: Involves pure function to map or sort items
- Types: Includes all typescript interfaces/types/enums.
- Constants: Includes constant variables
- Router: Includes the router file

Error and loading states are handled for each views and unit tests are covered with vitest. All files are covered with unit test with around 90% coverage (except 4 component because of the time).

TODO part:

- Create a better structure for styles. Reduce duplications by creating a root design file.
- Create child routes for some views.

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
