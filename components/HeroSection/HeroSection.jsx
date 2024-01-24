import React from "react";
import Image from "next/image";

import Style from "./HeroSection.module.css";
import { Button } from "../componentsindex";
import images from "../../img";

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Discover, collect and sell NFTS </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            hendrerit augue nisl, sit amet tempor ante rhoncus dictum
          </p>
          <Button btnName="Start Your Search" />
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="Hero section"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
