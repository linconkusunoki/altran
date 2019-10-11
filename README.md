# Altran Front-end Test (React)

## What I've done?

- First of all I like to set the code patterns with `Prettier`, `ESLint` and `EditorConfig`
- I've used the **React Router** to have two pages **Home** and **Profile**, in the Home page we have the list of gnomes and the filters as well. The Profile page we have the informations filtered by ID, so if you check the URL you'll find the parameter `:id` used for this
- For the long gnomes list, I've used the **React Window** which provides a good way to handle virtualized data, so we solved the slow render
- For requests I've used the `Axios` and configured on instance of it, so we need to point only for the endpoints instead of full URL. Also, I created an service just to fetch the data from API, the service methods could be like the REST methods (GET/POST/DELETE...)
- Still in the async, I created an folder `/hooks` that contain one hook to fetch data based on the function and parameters passed to it, as result it return an object with `error`, `response` and `isLoading` state, so in the component is very easy to request data, keep the code very clean and is very reusable.
- To Keep the layout flexible and reusable in all views, I separated it in some parts, so Views can decide which part of the layout they want to load
- For the `components` I decided to use `styled-components` to style, because it keep the code very clean and it's very friendly
- For `testing` I've used `react-testing-library`, in my opinion is the best library for test all frontend frameworks today

## Available scripts

#### `start`

Starts the project

#### `build`

Create an build of project

#### `test`

Starts the Jest

#### `test:cover`

Generate the coverage report

#### `eject`

Don't use this guy
