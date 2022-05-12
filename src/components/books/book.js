import * as React from 'react'
import { bookStyle } from './books.module.css'

const Book = ({ book }) => {
    return(
        <div className={bookStyle}>
            <h2>{book.name}</h2>
            <h3>{book.author}</h3>
            <p>{book.language}</p>
        </div>
    )
}

export default Book