"use client";
import React from "react";
import styles from "./css/testimonialSection.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Loop } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import spanIcon from "@/assets/svgs/testimonialSection/spanIcon.svg";
import client1Image from "@/assets/home/testimonialImages/client1.png";
import client2Image from "@/assets/home/testimonialImages/client2.png";
import client3Image from "@/assets/home/testimonialImages/client3.png";
import feedBackImage from "@/assets/svgs/testimonialSection/feedback.svg";

const testimonials = [
  {
    id: 1,
    content:
      "I like getting the SMS & knowing the job's done. I often refer to it, 'hope you get a ping today!'",
    image: client1Image,
    name: "Mike Torello",
    position: "CEO of Initech",
  },
  {
    id: 2,
    content:
      "We have successfully sold digital products and are happy with the results & look forward to using it again.",
    image: client2Image,
    name: "Mike Torello",
    position: "CEO of Initech",
  },
  {
    id: 3,
    content:
      "Design Monks offers producers a cost-effective selling tool. Having the ability to post prices that you want on an exchange visible.",
    image: client3Image,
    name: "Thomas Magnum",
    position: "Barellon NSW",
  },
];

const TestimonialSection = () => {
  return (
    <section className={`${styles.testimonial_section} relative`}>
      <h2 className={`absolute top-[15%] left-10 ${styles.main_Heading}`}>
        TESTIMONIALS
      </h2>
      <div className="relative z-10 max-w-5xl text-left pb-8">
        <h3 className={styles.testimonial_subHeading}>
          Get to Know Our{" "}
          <span className="bg-gradient-to-br from-[#ef3b26] via-[#eb4624] to-[#f48752] text-transparent bg-clip-text">
            Clients
          </span>
        </h3>
      </div>
      
      {/* Swiper for Responsive Testimonial Cards */}
      <Swiper
        slidesPerView={1} // Default to 1 slide
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 1.5, spaceBetween: 20 }, // Tablets
          1024: { slidesPerView: 2, spaceBetween: 30 }, // Laptops
          1280: { slidesPerView: 3, spaceBetween: 40 }, // Large Screens
        }}
        modules={[Autoplay]}
        className={styles.testimonial_cardSection}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className={styles[`testimonial_card${testimonial.id}`]}>
            <div className="flex flex-col gap-6">
              <div>
                <Image src={spanIcon} alt="Quote Icon" />
              </div>
              <div className="flex flex-col gap-8">
                <p className={styles[`testimonial_card${testimonial.id}Content`]}>
                  {testimonial.content}
                </p>
                <div className={styles[`testimonial_card${testimonial.id}Info`]}>
                  <div>
                    <Image src={testimonial.image} alt={testimonial.name} width={52} height={52} />
                  </div>
                  <div className={styles[`client${testimonial.id}Address`]}>
                    <Image src={feedBackImage} alt="Feedback Icon" />
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSection;
