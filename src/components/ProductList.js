import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  //console.log(props);

  return props.productList.length > 0 ? (
    props.productList.map((product, index) => {
      return (
        <Product
          product={product}
          key={index}
          addElement={props.addElement}
          decElement={props.decElement}
          removeItem={props.removeItem}
          i={index}
        />
      );
    })
  ) : (
    <h1>No product Exist in the cart</h1>
  );
}
