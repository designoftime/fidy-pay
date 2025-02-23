"use client";
import React, { useEffect, useRef } from "react";
import styles from "./css/blogSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import prevBtn from "@/assets/svgs/blogSection/prevIcon.svg";
import nextBtn from "@/assets/svgs/blogSection/nextIcon.svg";
import Image from "next/image";
import heroImg from "@/assets/home/heroImage.png";
import Link from "next/link";

const BlogSection = () => {
  const blogs = [
    {
      title:
        "Understanding Payment Aggregators in India: Types, Examples, and Operations",
      description:
        "The world of digital payments is evolving rapidly, and with it, the role of payment aggregators in India is becoming...",
      link: "#",
    },
    {
      title: "How Digital Payments Are Transforming Businesses",
      description:
        "Discover how digital payments are reshaping the way businesses operate, making transactions smoother and more secure...",
      link: "#",
    },
    {
      title: "The Future of FinTech in India",
      description:
        "FinTech is evolving rapidly in India. Explore the latest trends and what the future holds for financial technology...",
      link: "#",
    },
  ];
  const swiperRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      if (prevButtonRef.current && nextButtonRef.current) {
        prevButtonRef.current.addEventListener("click", () => swiperInstance.slidePrev());
        nextButtonRef.current.addEventListener("click", () => swiperInstance.slideNext());
      }
    }
  }, []);
  return (
    <section className={`relative w-full min-h-screen bg-black flex items-center ${styles.blog_section}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src={heroImg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10  mx-auto w-full">
        <div className={`mx-auto flex flex-col md:flex-row justify-center items-center gap-6 ${styles.blogSection_cards}`}>
          
          {/* Left Content */}
          <div className={styles.blogLeft}>
            <h2>The Fidypay Blogs</h2>
            <p className="text-gray-300 mb-6">
              To help you get a detailed knowledge of our various service solutions, here’s a range of blogs for you to understand their benefits and usability. Apart from that, if you are a budding FinTech start-up, then you will also be getting an understanding of all of its industry aspects.
            </p>
            <div className="text-left">
            <button className="bg-[#ff5c33] hover:bg-[#e14a2d] text-black py-2 px-6 rounded-full transition font-[Rajdhani-semibold]">
              Read more
            </button></div>
          </div>

          {/* Swiper Section */}
          <div className={styles.blogRight}>
            <button ref={prevButtonRef} className={styles.navButton}>
              <Image src={prevBtn} alt="Previous" width={150} height={150} />
            </button>

            <Swiper
            ref={swiperRef}
              modules={[Autoplay, Navigation]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              spaceBetween={20}
              slidesPerView={1} // Ensures only one slide per view
              loop={true}
              navigation={{
                nextEl: `.${styles.nextButton}`,
                prevEl: `.${styles.prevButton}`,
              }}
              className="swiper-container mx-auto"
            >
              {blogs.map((blog, index) => (
                <SwiperSlide key={index} className="swiper-slide mx-auto">
                  <div className={styles.blogCard}>
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>
                    <Link href={blog.link} className={styles.readMoreBtn}>
                      READ MORE
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button ref={nextButtonRef} className={styles.navButton}>
              <Image src={nextBtn} alt="Next" width={150} height={150} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
