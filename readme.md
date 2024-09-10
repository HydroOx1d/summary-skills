## Authorization
Here are login and password for testing app completely

```
login - test
password - 123
```

## Start project

```bash
  npm install - install dependecies
  npm run start:dev || npm run start:vite:dev - start the project
```

---

## Scripts

In the project directory, you can run the following scripts:

### Development

- **`npm run start`**:  
  Starts the Webpack development server on port 3000.

- **`npm run start:vite`**:  
  Starts the Vite development server.

- **`npm run start:server`**:  
  Starts the JSON server for mock API.

- **`npm run start:dev`**:  
  Runs both Webpack development server and JSON server concurrently.

- **`npm run start:vite:dev`**:  
  Runs both Vite development server and JSON server concurrently.

### Build

- **`npm run build:dev`**:  
  Creates a development build using Webpack.

- **`npm run build:prod`**:  
  Creates a production build using Webpack. Sets the API URL for production.

### Linting

- **`npm run lint`**:  
  Lints TypeScript files.

- **`npm run lint:fix`**:  
  Lints and automatically fixes TypeScript files.

- **`npm run lint:scss`**:  
  Lints SCSS files.

- **`npm run lint:scss:fix`**:  
  Lints and automatically fixes SCSS files.

### Testing

- **`npm run test:unit`**:  
  Runs unit tests with Jest.

- **`npm run test:ui`**:  
  Runs UI tests using Chromatic.

### Storybook

- **`npm run storybook`**:  
  Starts the Storybook server on port 6006.

- **`npm run build-storybook`**:  
  Builds the Storybook project.

### Code Generation

- **`npm run generate`**:  
  Runs a script to generate project layers based on Feature-Sliced Design.

---

## Architecture of the project

There is using FSD methodology - [Feature Sliced Design](https://feature-sliced.design/docs/get-started/overview)

---

## Working with Translations

The project uses [i18next](https://www.i18next.com/) for handling translations. Translation files are located in the `public/locales` directory.

### Key Points:

- **i18next**:  
  A powerful internationalization framework that supports translation management, placeholders, date and number formatting, and more.

- **Translation Files Location**:  
  All translation files are stored in the `public/locales` directory. They are organized by language, for example: `public/locales/en/translation.json` for English.

For more information on how to configure and use i18next, visit the [official i18next documentation](https://www.i18next.com/).

---

## Testing 

There are 4 types of tests:

- Unit tests - `npm run test:unit`
- Ui tests (using [Chromatic](chromatic.com)) - `npm run test:ui`


---

## Linting

Linting is used in this project to maintain code quality and consistency across TypeScript files and stylesheets.

### TypeScript Linting
The project uses ESLint to lint TypeScript code. This helps catch potential errors and enforce coding standards.

- **Scripts**:
  - Lint: `npm run lint`
  - Lint with Auto-fix: `npm run lint:fix`

### SCSS Linting
Stylelint is used to lint SCSS files, ensuring that the styles adhere to best practices.

- **Scripts**:
  - Lint: `npm run lint:scss`
  - Lint with Auto-fix: `npm run lint:scss:fix`

### Custom ESLint Plugin

For strict adherence to architectural principles, the project uses a custom ESLint plugin: [eslint-plugin-fsd-import-check](https://www.npmjs.com/package/eslint-plugin-fsd-import-check). This plugin enforces three key rules:

1. **relative-path**: Prohibits the use of absolute paths within a single module.
2. **layer-imports**: Prevents lower-level modules from importing higher-level modules.
3. **public-api-imports**: Enforces imports from other modules only through their public API. Auto-fix is available for this rule.

These rules ensure that the project's architecture remains clean and consistent, preventing potential issues related to module dependencies and import practices.

---

## Storybook

Storybook is used in this project to develop and test UI components in isolation.

### Setup and Usage

- **Mocking Requests**:  
  The project uses [msw](https://mswjs.io/) and [msw-storybook-addon](https://storybook.js.org/addons/msw-storybook-addon/) for mocking API requests in Storybook stories. This allows components to be tested with simulated data and responses.

- **Story Files**:  
  Stories are created alongside the components they represent. A typical story file might look like this:

  ```typescript
  import type { Meta, StoryObj } from "@storybook/react";
  import Button, { ButtonTheme, SizesButton } from "./Button";
  import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
  import { Theme } from "@/shared/constants/theme";

  const meta: Meta<typeof Button> = {
    title: "shared/Button",
    component: Button,
    args: {
      children: "Button",
    },
  };

  export default meta;

  type Story = StoryObj<typeof Button>;

  export const Default: Story = {
    render: (args) => <Button>{args.children}</Button>,
  };
  ```

  This example defines a basic `Button` component story, specifying the component's default properties and how it should be rendered.

- **Running Storybook**:  
  To start Storybook, use the following command:

  ```bash
  npm run storybook
  ```

This command will launch the Storybook server, allowing you to browse and interact with your components in an isolated environment.

---

## Project Configuration

The project is configured to support development with two build tools: **Vite** and **Webpack**. This flexibility allows developers to choose the tool that best suits their workflow or project requirements.

### Configuration Files

All configuration files are located in the `config` directory. This centralized approach keeps the project organized and makes it easier to manage and update configurations.

- **Vite**:  
  Vite is used for fast development builds. It offers a modern development experience with instant server start and hot module replacement.

- **Webpack**:  
  Webpack is used for more advanced configurations and production builds. It is a powerful tool that can handle complex setups and optimizations.

By having both Vite and Webpack available, the project can leverage the strengths of each tool depending on the development or production needs.

---

## CI Pipeline

The project utilizes **GitHub Actions** for continuous integration (CI) and continuous delivery (CD). This setup automates various aspects of the development workflow, including testing, building, and linting, to ensure code quality and streamline the deployment process.

### Key Features:

- **Automated Testing**:  
  All tests (unit, React component, UI, and E2E) are automatically run on each pull request and commit to ensure that changes do not break existing functionality.

- **Automated Builds**:  
  The project is built automatically in different environments (development, production) to ensure that it compiles successfully and that all assets are correctly generated.

- **Linting**:  
  Code is automatically linted as part of the CI pipeline, ensuring that it adheres to the project's coding standards before it is merged or deployed.

- **Continuous Delivery**:  
  The pipeline is configured to automatically deploy the project when changes are merged into the main branch, keeping the deployment process fast and efficient.

This CI pipeline helps maintain a high standard of code quality and ensures that the deployment process is smooth and reliable.

---

---

## Feature Flag Toggler

The "ToggleFeature" function is needed for effective implementation of new features.

```js
const feature = toggleFeature({
  name: "someFeature",
  on: () => "New Feature", // it must be an arrow function which returns any type that react can handle
  off: () => "Old Feature" // it must be an arrow function which returns any type that react can handle
});
```
With this script, you can embed the feature in the application completely or roll it back
```bash
npx ts-node .\scripts\removeUnnecessaryFeatureCode.ts someFeature on
```
```js
// before script

const feature = toggleFeature({
  name: "someFeature",
  on: () => <NewComponent/>, 
  off: () => <OldComponent/>
});

// after script

const feature = <NewComponent/>
```