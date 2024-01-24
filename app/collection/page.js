import React from "react";

import Style from "./collection.module.css";
import images from "../../img";
import {
  Banner,
  CollectionProfile,
  NFTCardTwo,
} from "@/collectionPage/collectionIndex";
import { Filter, Brand, Silder } from "@/components/componentsindex";

const Home = () => {
  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];
  return (
    <div className={Style.collection}>
      <Banner bannerImage={images.creatorbackground1} />
      <CollectionProfile />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />

      <Silder />
      <Brand />
      
    </div>
  );
};

export default Home;
