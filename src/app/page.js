"use client";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import classes from "./page.module.css";
import ProductCard from "./components/ProductCard";
import { useGetAllProductsQuery } from "./RtkQuery/apiSlice";
import Loader from "./components/Loader";
import { useDispatch } from "react-redux";
import { addToCart, wishList } from "./RtkQuery/AddToCart";

export default function Home() {
  const { isLoading, isFetching, data, error } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <HeroSection
        heading={"Online Shopping"}
        para={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        }
      />
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <section className={classes.content}>
            <div className={classes.header}>
              <h2>Our Products</h2>
            </div>
          </section>

          <Row className={"gy-4 mb-5"}>
            {data?.slice(0, 20)?.map((e) => {
              return (
                <Col md={4}>
                  <ProductCard onClick={() => dispatch(wishList(e))} />
                </Col>
              );
            })}
          </Row>
        </Container>
      )}

      <Footer />
    </>
  );
}
