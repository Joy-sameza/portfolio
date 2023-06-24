import React from "react";
import "./messages.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
};
async function postNewReview(data) {
  const response = await axios.post(
    "http://localhost:3001/reviews/new-review",
    data,
    config
  );
  console.log(response.data);
}

async function getReviews(data) {
  const response = await axios.get("http://localhost:3001/reviews", config);
  data.push(response.data);
}

export default function Messages() {
  let data = [];
  getReviews(data);
  const {
    register,
    handleSubmit,
  } = useForm();
  const reviewSubmit = (data) => {
    if (!data.review) return;
    postNewReview(data);
  };
  return (
    <>
      <section className="messages">
        <div className="message">
          {
            data.forEach((data, index) => {
              <div key={index} id="dt">
                email: {data.email},<br />
                message: {data.message}
              </div>
            })
          }
        </div>
      </section>
      <section id="review">
        <h2 className="title">Review</h2>
        <div className="form">
          <form onSubmit={handleSubmit(reviewSubmit)}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Name"
                {...register("name")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                {...register("email")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="review">Review</label>
              <textarea
                type="text"
                name="review"
                id="review"
                placeholder="Review"
                cols="30"
                rows="10"
                {...register("review")}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send Review
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
