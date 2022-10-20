//import { useState } from "react";
//import React {useState} from "react";

export default function Product(props) {
  console.log(props);
  // console.log(props.product.Quantity);

  // const [count, setCount] = useState(0);

  // function addElement() {
  //   setCount(count + 1);
  //   console.log(count);
  //   console.log(props.product.Quantity);
  // }

  // function decElement() {
  //   setCount(count - 1);
  //   console.log(count);
  //   console.log(props.product.Quantity);
  //   props.product.Quantity = count - 1;
  // }

  return (
    <div className="row mt-5">
      <div className="col-5">
        <h2>
          {props.product.Name}
          <span className="badge bg-secondary"> ₹ {props.product.Price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.addElement(props.i);
            }}
          >
            +
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.Quantity}
            {/* {count} */}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.decElement(props.i);
            }}
          >
            -
          </button>
        </div>
      </div>
      <div className="col-2">
        {props.product.Quantity * props.product.Price}
      </div>

      <div className="col-2">
        <button
          className="btn btn-danger"
          onClick={() => {
            props.removeItem(props.i);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
