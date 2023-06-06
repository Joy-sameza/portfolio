import React from "react";
import "./messages.css";
import { useForm } from "react-hook-form";
import axios from "axios";

async function postNewReview(data) {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };
    const response = await axios.post(
      "http://localhost:3001/reviews/new-review",
      data,
      config
    );
    console.log(response);
  }

export default function Messages() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const reviewSubmit = (data) => {
    if (!data.review) return;
    postNewReview(data);
  };
  return (
    <>
      <section className="messages"></section>
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
                placeholder="Name"
                {...register("name", {
                  required: "Your name is required",
                  validate: {
                    checkLength: (value) => value.length >= 3,
                  },
                })}
              />
              {errors.name?.type === "checkLength" && (
                <small className="errorMsg">
                  Name should be at-least 3 characters.
                </small>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid.",
                  },
                })}
              />
              {errors.email && (
                <small className="errorMsg">{errors.email.message}</small>
              )}
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
              <small className="errorMsg"></small>
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
