import React, { Component } from 'react';
import '../index.css';
import BookProp from './BookProp';

class Home extends React.Component {
constructor(props) {
   super(props);
   this.state = {
     nameOfNewBook: '',
     items: []
   };
 }

 handleAddItem = () => {
   const items = this.state.items;
   this.setState({ 
     nameOfNewBook: '',
     items: [...this.state.items, this.state.nameOfNewBook]
    });
 };

 handleChange = (e)=> {
   e.preventDefault();
   this.setState({
     nameOfNewBook: e.target.value
    });
 }

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
      <BookProp />
       <div>
          {
              items.map((item, index) => 
                  
               <div className="new-book">
                <div>
                  <div key={item}>
                     <h2 className="head2">{item}</h2>
                  </div>
                  <br />
                  <div className="modify-btns">
                    <button  className="modify" type="button">Comments</button>
                    <button type="button"  className="modify" onClick={ this.handleRemoveItem }>Remove</button>
                    <button  className="modify" type="button">Edit</button>
                  </div>
                  </div>
                  <div className="sideca">
                    <div className="divider"></div>
                    <div>
                      <h5>CURRENT CHAPTER</h5>
                      <p>Chapter 17</p>
                      <button  className="progress-btn" type="button">Update Progress</button>
                    </div>
                  </div>
               </div>             
           )}
       </div>

       <div className="horizontal-divider"></div>

       <div className="form">
           <h3 className="header3">ADD NEW BOOK</h3>
           
               <input type="text" placeholder="Book Title" onChange={ this.handleChange } name="nameOfNewBook" required />
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

export default Home;