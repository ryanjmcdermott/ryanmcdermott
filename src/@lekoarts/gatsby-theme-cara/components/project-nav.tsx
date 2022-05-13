/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = styled.nav`
    margin-bottom: 2rem;
`

const Menu = styled.ul`
    display: flex;        
    align-items: center;
    flex-wrap: nowrap;
    align-content: center;
    flex-direction: column;
    padding: 0;

    @media (min-width: 65em) {
        flex-direction: row;
        justify-content: space-between;
    }
`

const Item = styled.li`
    list-style: none;
    -webkit-transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)!important;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)!important;
    transition-property: all !important;
    transition-duration: 0.4s !important;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
    transition-delay: 0s !important;
    width: 100%;
    margin: 0.5rem 0;

    @media (min-width: 65em) {
        width: unset;
        margin: 0;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 25px -5px rgb(0 0 0 / 10%), 0 10px 10px -5px rgb(0 0 0 / 4%);
    }

    a {
        color: var(--theme-ui-colors-white);
        background: linear-gradient(to right, #D4145A 0%, #FBB03B 100%);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
        padding: 0.5rem 1.5rem;
        border-radius: 0.5rem;
        display: block;
        width: 100%;
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
        position: relative;
        -webkit-transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)!important;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)!important;
        transition-property: all !important;
        transition-duration: 0.4s !important;
        transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
        transition-delay: 0s !important;

        &:hover {
            color: white;
        }

        &.active {
            background: linear-gradient(to right, #662D8C 0%, #ED1E79 100%);
        }
    }
`


const ProjectNav = () => {
    return (
        <>        
            <Nav>
                <Menu>
                    <Item>
                        <Link to="/motion-graphics" activeClassName="active">Motion Graphics</Link>
                    </Item>
                    <Item>
                        <Link to="/web-development" activeClassName="active">Web Development</Link>
                    </Item>
                    <Item>
                        <Link to="/photo-editing" activeClassName="active">Photo Editing</Link>
                    </Item>
                    <Item>
                        <Link to="/photo-manipulation" activeClassName="active">Photo Manipulation</Link>
                    </Item>
                </Menu>
            </Nav>
        </>
    )
}

export default ProjectNav