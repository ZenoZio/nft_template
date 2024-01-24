import React from "react";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";

import Style from "./Footer.module.css";
import images from "../../img";
import { Discover, HelpCenter } from "../Navbar/index";

function Footer() {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <Image src={images.logo} alt="Footer logo" height={100} width={100} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl
            orci, hendrerit bibendum porta eget, rutrum in lacus.
          </p>
          <div className={Style.footer_social}>
            <a href="">
              <TiSocialFacebook />
            </a>
            <a href="">
              <TiSocialLinkedin />
            </a>
            <a href="">
              <TiSocialYoutube />
            </a>
            <a href="">
              <TiSocialTwitter />
            </a>
            <a href="">
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        <div className={Style.footer_box_discover}>
          <h3>Discover</h3>
          <Discover />
        </div>
        <div className={Style.footer_box_help}>
          <h3>Help Center</h3>
          <HelpCenter />
        </div>
        <div className={Style.subscribe}>
          <h3>Subscribe</h3>
          <div className={Style.subscribe_box}>
            <input type="email" placeholder="Enter Your Email " />
            <RiSendPlaneFill className={Style.subscribe_box_send} />
          </div>
          <div className={Style.subscribe_box_info}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl
              orci, hendrerit bibendum porta eget, rutrum in lacus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
