import { randomId } from "./helpers";
export default [
  {
    name: "personal",
    id: randomId(),
    color: "#6695ed",
    tasks: [
      {
        id: randomId(),
        title: "Workout",
        desc: "Go to park for jogging",
        date: new Date().toLocaleDateString("en-GB"),
        isDone: true,
      },
      {
        id: randomId(),
        title: "Study",
        desc: "Learn vue 3",
        date: new Date().toLocaleDateString("en-GB"),
        isDone: false,
      },
    ],
  },
  {
    name: "work",
    id: randomId(),
    color: "#b82638",
    tasks: [
      {
        id: randomId(),
        title: "Article",
        desc: "Write a new article about penguins",
        date: new Date().toLocaleDateString("en-GB"),
        isDone: false,
      },
      {
        id: randomId(),
        title: "Test",
        desc: "Study for test",
        date: new Date().toLocaleDateString("en-GB"),
        isDone: false,
      },
    ],
  },
  {
    name: "home",
    id: randomId(),
    color: "#40d872",
    tasks: [
      {
        id: randomId(),
        title: "Grocery",
        desc: "I have to buy some grocery",
        date: new Date().toLocaleDateString("en-GB"),
        isDone: false,
      },
      {
        id: randomId(),
        title: "Clean",
        desc: "I need to clean toilet",
        date: new Date().toLocaleDateString("en-GB"),
        isDone: false,
      },
    ],
  },
  {
    name: "Social",
    id: randomId(),
    color: "#f6c445",
    tasks: [
      {
        id: randomId(),
        title: "Drink",
        desc: "Meet with friends at bar",
        date: new Date().toLocaleDateString("en-GB"),
        isDone: false,
      },
    ],
  },
];
