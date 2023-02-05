import randomId from "./GUID";
export default [
  {
    list: "personal",
    id: randomId(),
    color: "#6695ed",
    tasks: [
      {
        id: randomId(),
        title: "Workout",
        desc: "Go to park for jogging",
        date: new Date().toLocaleDateString("en-GB"),
        isDone: false,
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
    list: "work",
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
        date: "05/02/2023",
        isDone: false,
      },
    ],
  },
  {
    list: "home",
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
        title: "Grocery",
        desc: "I have to buy some grocery",
        date: new Date().toLocaleDateString("en-GB"),
        isDone: false,
      },
      {
        id: randomId(),
        title: "Grocery",
        desc: "I have to buy some grocery",
        date: new Date().toLocaleDateString("en-GB"),
        isDone: false,
      },
      {
        id: randomId(),
        title: "Grocery",
        desc: "I have to buy some grocery",
        date: new Date().toLocaleDateString("en-GB"),
        isDone: false,
      },
    ],
  },
];
