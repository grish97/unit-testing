import { http, HttpResponse } from "msw";

const users = require("./data/users.json");

export const handlers = [
  http.get("http://localhost:3000/users", () => {
    return HttpResponse.json(users, {
      status: 404,
    });
  }),
];
