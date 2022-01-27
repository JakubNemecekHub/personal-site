import * as React from 'react'
import MyList from './my-list'
import { skillFlexContainer, skillFlexItem } from './my-list-container.module.css'

const MyListContainer = ({data}) => {
    return (
        <div className={skillFlexContainer}>
        {
        data.map((item, index) => (
            <div className={skillFlexItem} key={index}>
                <MyList title={item.node.title} items={item.node.skills} />
            </div>
        ))
        }
        </div>
    )
}

export default MyListContainer