import React from "react";
import "./testimonial.css";
import avt1 from "../../assets/avatar1.jpg";
import avt2 from "../../assets/avatar2.jpg";
import avt3 from "../../assets/avatar3.jpg";
import avt4 from "../../assets/avatar4.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";


const data = [
  {
    avatar: avt1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quam, voluptate error fugit possimus magni modi accusamus illo neque? Enim porro veritatis corporis? Magnam animi doloremque enim fugiat perspiciatis perferendis",
  },
  {
    avatar: avt2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quam, voluptate error fugit possimus magni modi accusamus illo neque? Enim porro veritatis corporis? Magnam animi doloremque enim fugiat perspiciatis perferendis",
  },
  {
    avatar: avt3,
    name: "Kwame Despite",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quam, voluptate error fugit possimus magni modi accusamus illo neque? Enim porro veritatis corporis? Magnam animi doloremque enim fugiat perspiciatis perferendis",
  },
  {
    avatar: avt4,
    name: "Nana Ama McBrown",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quam, voluptate error fugit possimus magni modi accusamus illo neque? Enim porro veritatis corporis? Magnam animi doloremque enim fugiat perspiciatis perferendis",
  },
];

export default function Testimonial() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
      >
        {data.map(function ({ avatar, name, review }, index) {
          let num = index + 1;
          return (
            <SwiperSlide>
              <article key={num} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={"Avatar" + { num }} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
