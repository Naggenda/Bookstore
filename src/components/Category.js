 import React, { Component } from 'react';
 import '../index.css';


// class Addbook extends React.Component{

//     state = {
//         nameOfNewBook: '',
//         books: []
//     }

//     render(){
//         return(
//         <div className="cart-app">

//         <div>
//               {this.state.books.map((cart, i) => (
//                   <div key={`${cart}_${i}`} className="new-book">
//                      {cart}
//                      <div className="btn-modify">
//                         <button>Edit</button>
//                         <button>Delete</button>
//                      </div>
//                   </div>
//               ))}
//            </div>

//            <h1>My Todo App</h1>
//            <input onChange={this.handleChange.bind(this)} name="nameOfNewBook" />

           

//            <button onClick={this.handleAddcartClick.bind(this)}>
//              Add to cart
//            </button>
           
           

//         </div>
//         );
//     }

//     handleChange(e) {
//         this.setState({
//             nameOfNewBook: e.target.value
//         });
//     }

//     handleAddcartClick(){
//         if (!this.state.nameOfNewBook.length) {
//             return;
//         }
//         this.setState({
//             nameOfNewBook: '',
//             books: [...this.state.books, this.state.nameOfNewBook]
//         });
//     }
// }
// export default Addbook;

class Category extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  handleAddItem = () => {
    const items = this.state.items;
    this.setState({ items: [...items, 'item-' + items.length] });
  };

  handleRemoveItem = () => {
    const items = this.state.items;
    if (items.length > 0) {
      const lastIndex = items.length - 1;
      this.setState({ items: items.filter((item, index) => index !== lastIndex) });
    }
  };

  render() {
    const items = this.state.items;
    return (
      <div className="wrapper">
        
        <div>
           {
               items.map((item, index) => 
                   
                <div className="new-book">

                   key={index}>{item}
                   <br />
                   <button  className="btn-add" type="button">Edit</button>
                   <button type="button"  className="btn-add" onClick={ this.handleRemoveItem }>Delete</button>
                </div>
                   
               
            )}
        </div>
        <div className="form">
            <h3 className="header3">ADD NEW BOOK</h3>
            
                <input type="text" placeholder="Book Title" />
                <select>
                   <option>Action</option>
                   <option>Science Friction</option>
                   <option>Economy</option>
                </select>
                
                <button className="btn-add" onClick={this.handleAddItem}> Add Book</button>
            
        </div>
        
        
        
      </div>
    )
  }
}

export default Category;