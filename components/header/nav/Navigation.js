import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CollapseMenu from './CollapseMenu'
import ListIconMenu from './ListIconMenu'
import { Paper } from '@material-ui/core'
const Nav = styled.div`
    height: ${props => props.navProps.height};
    width: 100%;
    background-color: ${props => props.navProps.backgroundColor};
    top:0;
    position: fixed;
    z-index: 999;
    `;


const IconCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70%;
`
const ElementIconCenter = styled.div`
    width: 33.3%;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    font-size: 24px;
`

const NavTag = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 30%;
`

const NavIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12%;
    color: white;
    background-image: repeating-linear-gradient(45deg,currentColor 0,currentColor 1px,transparent 0,transparent 50%);
    background-size: 10px 10px;
`

const navProps = {
    height: '5em',
    backgroundColor: '#fff'
}

const IconLogo = styled.div`
    max-width: 8%;
    color: #E7393F !important;
    background-image: radial-gradient(currentColor 1px, transparent 1px);
    background-size: calc(5px) calc(5px);
    overflow: visible !important;
`
const SpanCustom = styled.p`
    line-height: 1 !important;
    color: #fff;
    font-size: 1rem;
    padding-left: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-weight: 800;
`

const PaperCustom = styled(Paper)`
    width: 100%;
    height: 100%;
    text-align: center;
    transform: translate(-4px,4px);
    font-weight: 800;
`

export default function Navigation({ ...props }) {

    const [tranform, setTransform] = useState(false);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            let prevScrollpos = window.pageYOffset;
            window.onscroll = function () {
                const maxScroll = document.body.clientHeight - window.innerHeight;
                let currentScrollPos = window.pageYOffset;
                if (
                    (maxScroll > 0 && prevScrollpos > currentScrollPos && prevScrollpos <= maxScroll)
                    || (maxScroll <= 0 && prevScrollpos > currentScrollPos)
                    || (prevScrollpos <= 0 && currentScrollPos <= 0)
                ) {
                    document.getElementById("navbar").style.top = "0"
                } else {
                    setTransform(true);
                    document.getElementById("navbar").style.top = "-5rem"; // adjustable based your need
                }
                if (currentScrollPos <= 50) setTransform(false);
                prevScrollpos = currentScrollPos;
            }
        }
    });

    return <header>
        <Nav id="navbar" navProps={{ height: props.height, backgroundColor: props.backgroundColor }}>
            <IconCenter>
                <ElementIconCenter> </ElementIconCenter>
                <ElementIconCenter>
                    <IconLogo><SpanCustom>TING TING SHOP</SpanCustom></IconLogo>
                </ElementIconCenter>
                <ElementIconCenter><ListIconMenu username={props.user.username} status={props.show} /></ElementIconCenter>
            </IconCenter>
            <NavTag>
                {
                    tranform ? <NavIcon>
                        <PaperCustom>
                            TING TING SHOP
                        </PaperCustom>
                    </NavIcon> : <></>
                }
                <CollapseMenu
                    id="aoNam"
                    name="aoNam"
                    content="Vietnamese Cuisine"
                />
                <CollapseMenu
                    id="quanNam"
                    name="quanNam"
                    content="
                    Chinese Cuisine" />
                <CollapseMenu
                    id="shoes"
                    name="shoes"
                    content="Japanese Cuisine" />
                <CollapseMenu
                    id="accessories"
                    name="accessories"
                    content="Korean Cuisine" />
            </NavTag>
        </Nav>
    </header>
}
