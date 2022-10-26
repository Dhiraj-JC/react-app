import React, { Component } from 'react'

export default class FormsComponent extends Component {

    constructor() {
        super();

        this.state = {
            productName: "",
            productDescription: "",
            productCatergory: "Category1"
        }
    }

    OnProductNameChanged(event) {
        this.setState({ productName: event.target.value});
    }

    OnProductDescriptionChanged(event) {
        this.setState({ productDescription: event.target.value});
    }

    OnProductCategoryChanged(event) {
        this.setState({ productCatergory: event.target.value});
    }

    OnSubmit(event) {
        event.preventDefault();
        alert("Product Name : " + this.state.productName  + " Description : " + this.state.productDescription + " Category : " + this.state.productCatergory);
    } 

  render() {
    return (
        <>
            <form onSubmit={(event)=> {this.OnSubmit(event)}}>
            
            <div>
                <label>Product Name</label>
                <input type="text" 
                value={this.state.productName} 
                onChange={(event)=> {this.OnProductNameChanged(event)}} />
            </div>

            <div>
                <label>Product Description</label>
                <textarea value={this.state.productDescription}
                onChange={(event)=> {this.OnProductDescriptionChanged(event)}}
                />
            </div>

            <div>
                <label>Product Categories</label>
                <select value={this.state.productCatergory} onChange={(event)=> {this.OnProductCategoryChanged(event)}}>
                    <option value="Category1">Category1</option>
                    <option value="Category2">Category2</option>
                    <option value="Category3">Category3</option>
                    <option value="Category4">Category1</option>
                </select>
            </div>
                <button type="submit">Save</button>
            </form>

          
      </>
    )
  }
}
