/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = styled.nav`
    display: block;
    padding: 0 0 2rem 0;
    width: 100%;
    z-index: 51;
`

const Menu = styled.ul`
    padding: 0;
    margin: 0;
`

const Item = styled.li`
    list-style: none;
    transition: all 0.1s ease-in-out;

    &:hover {
        padding-right: -0.5rem;

        span {
            padding-right: 0.5rem;
        }
    }

    span {
        transition: all 0.1s ease-in-out;
    }
    
`

const MainNav = () => {
    return (
        <>
            <Nav>            
                <Menu>
                    <Item>
                        <Link to="/" activeClassName="active"><span>←</span> Home</Link>
                    </Item>
                </Menu>            
            </Nav>
        </>
    )
}

export default MainNav