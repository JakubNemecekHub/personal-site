import * as React from 'react'
import Book from './book'
import { bookListStyle } from './books.module.css'

const BookList = ({ books }) => {
    console.log(books);
    return(
        <div>
            <h1>My Books</h1>
            <div className={bookListStyle}>
                {
                    books.map((book, index) =>(
                        <Book book={book} key={index} />
                    ))
                }
            </div>
        </div>
    )

}

export default BookList