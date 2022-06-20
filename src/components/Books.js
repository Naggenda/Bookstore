import React, {useState} from 'react';
import '../index.css'

const Books = () => {
    const[myArray, updateMyArray] = useState([]);
    const onClick = () => {
        
        updateMyArray(arr => [...arr, `${arr.length}`]);
    };

    const removeProduct = (e) => {
        updateMyArray([
          ...myArray.slice(0, e),
          ...myArray.slice(e + 1, myArray.length)
        ]);
      }



    // const[new_book] = useState(myArray);
    // const handleDelete = () =>{
    //     updateMyArray(myArray.filter(arr => arr!==arr))
    // }
    
    return (
    <div className="addbooks">
        <div>
           {
               myArray.map(e => 
                   
                <div className="new-book">

                   {e}
                   <br />
                   <button type="button">Edit</button>
                   <button type="button" onClick={ removeProduct }>Delete</button>
                </div>
                   
               
            )}
        </div>

        <div className="form">
            <h3 className="header3">ADD NEW BOOK</h3>
            <form>
                <input type="text" placeholder="Book Title" />
                <select>
                   <option>Action</option>
                   <option>Science Friction</option>
                   <option>Economy</option>
                </select>
                <button type="button" className="btn-add" onClick={ onClick } value="Update">Add Book</button>
            </form>
        </div>
        </div>
    )
}

export default Books
