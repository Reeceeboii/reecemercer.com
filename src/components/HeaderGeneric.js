import React from 'react'

const HeaderGeneric = (props) => (
    <header id="header">
        <h1>{props.headerText}</h1>
        <p>{props.paragraphText}</p>
    </header>
)

export default HeaderGeneric
