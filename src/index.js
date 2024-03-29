import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

const PEOPLE = [
  {
    name: "John Davis",
    wont_eat: ["Fish"],
    drinks: ["Cider", "Rum", "Soft drinks"]
  },
  {
    name: "Gary Jones",
    wont_eat: ["Eggs", "Pasta"],
    drinks: ["Tequila", "Soft drinks", "beer", "Coffee"]
  },
  {
    name: "Robert Webb",
    wont_eat: ["Bread", "Pasta"],
    drinks: ["Vokda", "Gin", "Whisky", "Rum"]
  },
  {
    name: "Gavin Coulson",
    wont_eat: [],
    drinks: ["Cider", "Beer", "Rum", "Soft drinks"]
  },
  {
    name: "Alan Allen",
    wont_eat: ["Meat", "Fish"],
    drinks: ["Soft drinks", "Tea"]
  },
  {
    name: "Bobby Robson",
    wont_eat: ["Mexican"],
    drinks: ["Vokda", "Gin", "whisky", "Rum", "Cider", "Beer", "Soft drinks"]
  },
  {
    name: "David Lang",
    wont_eat: ["Chinese"],
    drinks: ["Beer", "cider", "Rum"]
  }
];

const VENUES = [
  {
    name: "El Cantina",
    food: ["Mexican"],
    drinks: ["Soft drinks", "Tequila", "Beer"]
  },
  {
    name: "Twin Dynasty",
    food: ["Chinese"],
    drinks: ["Soft Drinks", "Rum", "Beer", "Whisky", "Cider"]
  },
  {
    name: "Spice of life",
    food: ["Eggs", "Meat", "Fish", "Pasta", "Dairy"],
    drinks: ["Vokda", "Gin", "whisky", "Rum", "Cider", "Beer", "Soft drinks"]
  },
  {
    name: "The Cambridge",
    food: ["Eggs", "Meat", "Fish", "Pasta", "Dairy"],
    drinks: ["Vokda", "Gin", "Cider", "Beer", "Soft drinks"]
  },
  {
    name: "Wagamama",
    food: ["Japanese"],
    drinks: ["Beer", "Cider", "Soft Drinks", "Sake"]
  },
  {
    name: "Sultan Sofrasi",
    food: ["Meat", "Bread", "Fish"],
    drinks: ["Beer", "Cider", "Soft Drinks"]
  },
  {
    name: "Spirit House",
    food: ["Nuts", "Cheese", "Fruit"],
    drinks: ["Vodka", "Gin", "Rum", "Tequila"]
  },
  {
    name: "Tally Joe",
    food: ["Fish", "Meat", "Salad", "Deserts"],
    drinks: ["Beer", "Cider", "Soft Drinks", "Sake"]
  },
  {
    name: "Fabrique",
    food: ["Bread", "Cheese", "Deli"],
    drinks: ["Soft Drinks", "Tea", "Coffee"]
  }
];

ReactDOM.render(
  <App people={PEOPLE} venues={VENUES} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
