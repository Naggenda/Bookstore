import React from 'react';
import AddedBook from './AddedBook';

function bookProp() {
    return (
        <div>
        <AddedBook action="Action"
       book="The Hunger Games"
       writter="Suzanne Collins"
       chapter="Chapter 17"
       percentage="64%"
       />
       <AddedBook action="science friction"
       book="Dune"
       writter="Frank Herbert"
       chapter='Chapter 3: "A Lesson Learned"'
       percentage="8%"
       />
       <AddedBook action="Economy"
       book="Capital in the 21st Century"
       writter="Suzanne Collins"
       chapter="introduction"
       percentage="0%"
       />
        </div>
    )
}

export default bookProp
