import React from "react";

const AddedBook = (props) => {
  return (
    <div className="Books">
      <ul className="new-book">
        <div>
          <small>{props.action}</small>
          <h2 className="head2">{props.book}</h2>
          <p className="modify">{props.writter}</p>

          <div className="modify-btns">
            <button  className="modify" type="button">Comments</button>
            <button type="button"  className="modify">Remove</button>
            <button  className="modify" type="button">Edit</button>
          </div>
        </div>
        <div className="sideca">
            <div className="divider"></div>
                <div>
                    <h5>CURRENT CHAPTER</h5>
                    <p>{props.chapter}</p>
                    <button  className="progress-btn" type="button">Update Progress</button>                
            </div>
        </div>
      </ul>
    </div>
  );
};

export default AddedBook;
