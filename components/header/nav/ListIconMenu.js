import React, { useCallback, useEffect, useState } from "react"
import {useRouter} from "next/router"
import styled from "styled-components"
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { Link } from "@material-ui/core"
import Axios from "axios"

const IconList = styled.div`
    width: 100%;
    display: grid;
    align-items: center;
    justify-content: right;
    color: white;
`

const LinkCustom = styled.a`
    color: white;
`
const LinkCustomSize = styled.a`
    color: white;
    font-size: 14px;
`
export default function ListIconMenu({...props}) {
    const router = useRouter()

    const onHandleClick = useCallback(async (event) => {
        await Axios({
            url: "/api/logout",
            method: "GET"
        })
        router.push("/")
        event.preventDefault()
    })

    return <IconList>
        {
            props.status ? <LinkCustomSize href="#" onClick={event => onHandleClick(event)}>{props.username}</LinkCustomSize> :
                <LinkCustom href="/login"><AccountCircleIcon /></LinkCustom>
            
        }
        </IconList>
}