export default [
  {
    url: "/api/list",
    method: "get",
    response: ({ query }) => {
      return {
        code: 0,
        data: {
          name: "vben",
        },
      };
    },
  },
];
