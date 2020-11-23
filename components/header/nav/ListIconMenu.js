import React from "react"
import {useRouter} from "next/router"
import styled from "styled-components"
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { Link } from "@material-ui/core"

const IconList = styled.div`
    width: 100%;
    display: grid;
    align-items: center;
    justify-content: right;
    color: white;
`

const LinkCustom = styled(Link)`
    color: white;
`

export default function ListIconMenu() {
    let router = useRouter()

    return <IconList>
        <LinkCustom href="/login"><AccountCircleIcon /></LinkCustom>
    </IconList>
}