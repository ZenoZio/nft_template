import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";

import Image from "next/legacy/image";

import Style from "./Subscribe.module.css";
import images from "../../img";

const Subscribe = () => {
  return (
    <div className={Style.subscribe}>
      <div className={Style.subscribe_box}>
        <div className={Style.subscribe_box_left}>
          <h2>Never Miss a drop</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            dignissim, ante non lacinia luctus, tortor enim faucibus justo
          </p>

          <div className={Style.subscribe_box_left_box}>
            <span>01</span>
            <small>Get More discount</small>
          </div>

          <div className={Style.subscribe_box_left_box}>
            <span>02</span>
            <small>Get Premium discomagazines</small>
          </div>

          <div className={Style.subscribe_box_left_input}>
            <input type="email" placeholder="Enter your email" />
            <RiSendPlaneFill className={Style.subscribe_box_left_input_icon} />
          </div>
        </div>

        <div className={Style.subscribe_box_right}>
          <Image
            src={images.update}
            alt="Get update"
            height={600}
            width={800}
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
