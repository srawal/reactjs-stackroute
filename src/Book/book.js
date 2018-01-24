import React from 'react';
import './book.css';
import {AddToCartButton} from './cartButton/cart.js';

export class Book extends React.Component{
    render(){
        var BookDetails = [
            {
                title:"The Immortals of Meluha",
                author:"Amish Tripathi",
                publisher:"Westland Press",
                yearofpublish:2010,
                price:156,
                quantity:0
             

            },
            {
                title:"The Oath of the Vayuputras",
                author:"Amish Tripathi",
                publisher:"Westland Press",
                yearofpublish:2011,
                price:205,
                 quantity:6
                

            },
            {
                title:"The Secret of the Nagas",
                author:"Amish Tripathi",
                publisher:"Westland Press",
                yearofpublish:2011,
                price:151,
                quantity:3

            }
        ];
      
       const listItems = BookDetails.map((book,info) =>
       
        <div class="book-list">
            <h2 key={book.title}>Title : {book.title}</h2> 
            <h3 key={book.author}>Author : {book.author}</h3> 
            <h4 key={book.publisher}>Publisher : {book.publisher}</h4> 
            <p key={book.yearofpublish}>Year of Publish : {book.yearofpublish}</p> 
            <p key={book.price}>Price: {book.price}</p> 
            <p key={book.quantity}  >Quantity: {book.quantity}</p> 
            <AddToCartButton quantity={book.quantity}></AddToCartButton>
        </div>
       
    );
        return(
            <div class="book-details">
           { listItems }
            </div>
        )
    }
};

