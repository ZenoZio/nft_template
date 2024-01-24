"use client";

import React from "react";

import { Silder, Brand, Filter } from "@/components/componentsindex";
import { SearchBar } from "@/SearchPage/searchBarIndex";
import Style from "./searchPage.module.css";
import { NFTCardTwo, Banner } from "@/collectionPage/collectionIndex";
import images from "../../img";
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
    images.nft_image_3,
  ];
  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground10} />
      <SearchBar />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />
      <Silder />
      <Brand />
    </div>
  );
};

export default Home;
