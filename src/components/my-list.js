import * as React from 'react'
import { myList } from './my-list.module.css'

const MyList = ({ title, items }) => {
    return (
      <div className={myList}>
        <h1>{title}</h1>
        <ul>
        {
          items.map((item, index) => (
            <li key={index}><p>{item}</p></li>
          ))
        }
        </ul>
      </div>
    )
}

export default MyList