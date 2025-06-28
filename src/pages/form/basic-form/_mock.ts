import { defineMock } from "vite-plugin-mock-dev-server";

export default defineMock({
  url: "/api/basicForm",
  method: "POST",
  body: {
    data: { message: "Ok" },
  },
});
