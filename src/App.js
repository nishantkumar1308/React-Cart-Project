import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import React, { useState } from "react";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
function App() {
  const products = [
    {
      Name: "Iphone 13",
      Price: 99999,
      Quantity: 0,
    },
    {
      Name: "Samsumng s11",
      Price: 10000,
      Quantity: 0,
    },
    {
      Name: "Realmi",
      Price: 12000,
      Quantity: 0,
    },
  ];
  // console.log(typeof productList[0]);

  let [productList, setProductList] = useState(products);

  let [totalPrice, setTotalPrice] = useState(0);

  const addElement = (index) => {
    let newProductList = [...productList];
    let newtotalPrice = totalPrice;
    newProductList[index].Quantity++;
    newtotalPrice += newProductList[index].Price;
    setTotalPrice(newtotalPrice);
    setProductList(newProductList);
  };

  const decElement = (index) => {
    let newProductList = [...productList];
    let newtotalPrice = totalPrice;
    // newProductList[index].Quantity > 0
    //   ? newProductList[index].Quantity--
    //   : (newProductList[index].Quantity = 0);
    // newtotalPrice -= newProductList[index].Price;

    if (newProductList[index].Quantity > 0) {
      newProductList[index].Quantity--;
      newtotalPrice -= newProductList[index].Price;
    } else {
      newProductList[index].Quantity = 0;
    }

    setTotalPrice(newtotalPrice);

    setProductList(newProductList);
  };

  const reset = () => {
    let newtotalPrice = totalPrice;
    let newProductList = [...productList];
    newtotalPrice = 0;
    newProductList.map((products) => {
      return (products.Quantity = 0);
    });

    setProductList(newProductList);
    setTotalPrice(newtotalPrice);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newtotalPrice = totalPrice;
    newtotalPrice -=
      newProductList[index].Quantity * newProductList[index].Price;

    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalPrice(newtotalPrice);
  };

  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      Name: name,
      Price: price,
      Quantity: 0,
    });
    setProductList(newProductList);
  };

  return (
    <>
      {/*components*/}
      <Navbar />
      <main className="container">
        {/*components with props  taken value as arguments*/}
        <AddItem addItem={addItem} />
        <ProductList
          productList={productList}
          addElement={addElement}
          decElement={decElement}
          removeItem={removeItem}
        />
      </main>

      <Footer totalPrice={totalPrice} reset={reset} />
    </>
  );
}

export default App;
