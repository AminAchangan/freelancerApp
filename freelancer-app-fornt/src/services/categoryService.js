import http from "./httpService";

export function getCategoryApi() {
  return http.get("/category/list").then(({ data }) => {
    return data.data;
  });
}
