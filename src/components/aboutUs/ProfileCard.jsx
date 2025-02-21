import Image from "next/image";
import React from "react";
import profileImage from "@/assets/about/profile.png";
import styles from "./css/aboutContent.module.css";
const ProfileCard = () => {
  return (
    <>
      <div className="flex items-center space-x-4 py-4 ">
        <Image
          src={profileImage}
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className={styles.profile_name}>First name last name</p>
          <p className={styles.profile_position}>CEO and Founder</p>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
