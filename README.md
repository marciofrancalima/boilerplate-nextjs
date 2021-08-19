
# Boilerplate Next.js

Boilerplate with Next.js, Typescript, Styled components and Jest/RTL to start a project from scratch.

Editorconfig, ESLint and Prettier are already configured.


## Installation

Create a new Next.js project based on this boilerplate:

```bash
  yarn create next-app -e https://github.com/marciofrancalima/boilerplate-nextjs
```

Fill in the requested information and finally install the dependencies.

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn dev
```

## Running Tests

To run tests, run the following command

```bash
  yarn test
```
or
```bash
  yarn test:watch
```

## Plop generator

If you want, you can generate components via Plop based on the templates (`generators/templates`):

```bash
  yarn generate
```

These files are generated in `src/components/ComponentName` directory: `index.tsx`, `styles.ts` and `test.tsx`.

The `plopfile.js` file is in the `generators` directory.

[Plop Generator Doc](https://plopjs.com/)

---

Made with ♥ by Márcio França Lima. [Contact me](https://www.linkedin.com/in/m%C3%A1rcio-fran%C3%A7a-lima-916454187/)

