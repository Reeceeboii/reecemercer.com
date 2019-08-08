import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'
import { Link } from 'gatsby'

const navItems = [
    {
        type: "id",
        element: "intro",
        text: "Welcome"
    },
    {
        type: "id",
        element: "first",
        text: "Projects"
    },
    {
        type: "id",
        element: "second",
        text: "Blog"
    },
    {
        type: "id",
        element: "third",
        text: "What I'm Studying"
    },
    {
        type: "id",
        element: "contact",
        text: "Contact Me"
    }
]

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'first', 'second', 'third', 'contact'] } currentClassName="is-active" offset={-300}>
            {
                navItems.map( (item) => (
                    <li key={item.element}>
                        <Scroll type={item.type} element={item.element}>
                            <Link to="#">{item.text}</Link>
                        </Scroll>
                    </li>
                ))
            }
        </Scrollspy>
    </nav>
)

export default Nav
