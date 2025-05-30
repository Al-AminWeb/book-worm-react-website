import React from 'react';
import {useLoaderData, useParams} from "react-router";
import {addToStoreDb} from "../../utility/addToDb.js";

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
   const {bookName,image} = singleBook;
   const handleMarkAsRead = id =>{
addToStoreDb(id)
   }
    return  (
        <div className='w-2/3 mx-auto'>
            <img className='w-48' src={image} alt=""/>
            <h5>{bookName}</h5>

            <button onClick={()=>handleMarkAsRead(id)} className='btn btn-accent m-2'>Read</button>
            <button className='btn btn-info m-2'>Wishlist</button>
        </div>
    );
};

export default BookDetails;
