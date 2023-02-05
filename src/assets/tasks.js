import randomId from "./GUID";
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
        date: "05/02/2023",
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
  {
    name: "School",
    id: randomId(),
    color: "#f6c445",
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
    name: "Outside",
    id: randomId(),
    color: "#b3c901",
    tasks: [
      {
        id: randomId(),
        title: "asfasfas",
        desc: "dfsagsasagdasgas",
        date: new Date().toLocaleDateString("en-GB"),
        isDone: false,
      },
      {
        id: randomId(),
        title: "asdgsag",
        desc: "asdgsagsagdsadgsagsa",
        date: "05/02/2023",
        isDone: false,
      },
    ],
  },
];
