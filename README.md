# State Diagram Generator

This project has been built for the subject Theory of Computation (MC-204) at teh Delhi Technological 
University (DTU).

## Running the project on the browser

his has been eployed on GitHub Pages and a live version can be viewed 
[here](https:///www.anishLearnsToCode.github.io)

## Running the Project locally
To run this project locally you must have the following software/packages installed on your
local machine:

- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/en/)
- [Angular](https://angular.io/) - Can be installed after adding node on your machine
- [Typescript](https://www.typescriptlang.org/) - Can be added after installing Node on your machine

To add angular run the following command after adding node
```bash
npm i -g @angular/angular-cli
```

To add typescript run the following command after adding node
```bash
npm install -g typescript
```

Clone this repository on your machine using
```bash
git clone https://github.com/anishLearnsToCode/state-diagram-generator.git
```

To run locally
```bash
cd state-diagram-generator
ng serve
```

Now, the project will run on your local machine's port 4200. See [here](localhost:4200)

## About the Project

This project has been created to display the deterministic finite state automata (DFA) ot the 
Non-Deterministic Finite State Automata (NFA) of any given valid regular expression.

A deterministic automata along with it's transmission table will be generated for the given
regular expression and the user can also check whether any given string is recognized by that
particular regular language.
