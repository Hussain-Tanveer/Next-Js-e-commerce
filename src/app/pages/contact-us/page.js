"use client";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import { Container } from "react-bootstrap";
import HeroSection from "@/app/components/HeroSection";
const page = () => {
  return (
    <>
      <Header />
      <HeroSection
        heading={"Contact Us"}
        para={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        }
      />
      <Footer />
    </>
  );
};

export default page;
