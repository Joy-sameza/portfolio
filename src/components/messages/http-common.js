import { create as _create } from 'axios';

const http = _create({
    baseURL: "http://localhost:3000/reviews/",
    headers: {
        "Content-type": "application/json"
    }
});


class msgDataServices {
  getAll() {
    return http.get("/msg");
  }

  get(id) {
    return http.get(`/tutorials/${id}`);
  }

  create(msg) {
    return http.post("/new-msg", msg);
  }

  update(id, data) {
    return http.put(`/update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}