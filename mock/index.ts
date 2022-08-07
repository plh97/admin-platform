console.log(23);
export default [
  {
    url: "/api/list",
    method: "get",
    response: ({ query }) => {
      return {
        code: 0,
        data: {
          list: [
            {
              id: "1",
              name: "take shower",
              description: "go to toliet to take it.",
              status: 0,
            },
            {
              id: "2",
              name: "dinner",
              description: "go to food count to eat food.",
              status: 1,
            },
          ],
        },
      };
    },
  },
];
