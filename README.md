# React

I wanted to create a React project I could clone whenever I want to start and explore a new project. Through using my own project, I know what each part is responsible for, as opposed to a generic boilerplate project where knowledge is traded in for simplification.

The application has a Node.js server backend, with a React front-end.

## Start
```shell
git clone https://github.com/tmhn/react.git
cd react
yarn install
yarn run dev
```

## Tech Stack

### Core
* React
* React Router
* Redux
* Express
* Aphrodite

### Unit Testing
* Jest
* Enzyme

### Linting
* Eslint

## Depedencies
It's easy to lose track of deps, however I'm using the excellent [Dependabot](https://dependabot.com/) with a "Bump" every week. When the weekly changes are announced, I run `yarn outdated` - this lists all dependencies and their updates: Major, Minor or Patch. Minor & Patch can be updated with little worry, however Major updates deserve greater care.
