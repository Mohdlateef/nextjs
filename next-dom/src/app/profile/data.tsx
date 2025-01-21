
import React from 'react'

export default function Data() {
    const array = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon"];
    return (
        <div>
            {array.map((ele, index) => (
                <h3 key={index}>{ele}</h3>
            ))}
        </div>
    )
}
