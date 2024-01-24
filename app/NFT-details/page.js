"use client";
import React from "react";

import { Button, Category, Brand } from "@/components/componentsindex";
import NFTDetailsPage from "@/NFTDetailsPage/NFTDetailsPage";

import Style from "./NFT-details.module.css";

const Home = () => {
  return (
    <div>
      <NFTDetailsPage />
      <Category />
      <Brand />
    </div>
  );
};

export default Home;
