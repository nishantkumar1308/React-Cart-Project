import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
    };
  }
  render() {
    return (
      <form
        className="row mb-5"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.AddItem(this.state.productName, this.state.productPrice);
        }}
      >
        <div className="mb-3  col-4">
          <label htmlFor="inputName">Item Name</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            //  placeholder="Enter email"
            name="productName"
            onChange={(e) => {
              this.setState({ productName: e.currentTarget.value });
            }}
            value={this.state.productName}
          />
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="inputPrice">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="productPrice"
            onChange={(e) => {
              this.setState({ productPrice: e.currentTarget.value });
            }}
            value={this.state.productPrice}
          />
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary col-4 ">
          Add
        </button>
      </form>
    );
  }
}

export default AddItem;
