const express = require("express");
const router = express.Router();
const { reviewModel } = require("../models/reviewModels");

router.post("/new-review", (req, res, next) => {
  const dt = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.review,
  };
  const newReview = new reviewModel(dt);
  newReview
    .save()
    .then(() => {
      console.log("SAved!!");
      res.end("done");
    })
    .catch((err) => {
      console.error(err);
      res.end("error");
    });
  next();
});

router.get("/", (req, res, next) => {
  const storedReviews = [];
  reviewModel
    .find()
    .then((reviews) => {
      reviews.forEach((review) => {
        const obj = {
          name: review.name,
          email: review.email,
          message: review.message
        }
        storedReviews.push(obj);
      });
      res.status(200).send(storedReviews);
      console.log("Given review");
    })
    .catch((err) => console.error(err));
    // next();
  });

module.exports = router;
