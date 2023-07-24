import React from "react";
import classes from "./ProductCard.module.css";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
const ProductCard = ({ onClick }) => {
  return (
    <div className={classes.productCard}>
      <div onClick={onClick} className={classes.addCart}>
        <AiOutlineShoppingCart size={30} color="#fff" />
      </div>
      <div className={classes.imageMain}>
        <img src="https://picsum.photos/500/500" />
      </div>
      <div className={classes.content}>
        <h4>Trousers</h4>

        <h4>$300</h4>
      </div>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make
      </p>

      <div className={classes.rating}>
        {[1, 1, 1, 1, 1]?.map((e) => {
          return (
            <span>
              <AiFillStar size={24} color="#faca51" />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
