import { Grid, makeStyles } from "@material-ui/core"
import React, { useCallback, useEffect, useState } from "react"
import styled from "styled-components"
import FormLogin from "./login/FormLogin"

const useStyles = makeStyles({
    girdForm: {
        height: '400px',
        padding: '0 0 0.5rem 0'
    },
  });

export default function LoginPage() {
    const classes = useStyles();
    const [userLogin, setUserLogin] = useState({})

    const [userStatus, setUserStatus] = useState({
        username: false,
        password: false
    })

    const onChangeHandle = useCallback((event) => {
        let user = userLogin
        const {name, value} = event.target
        user[name] = value.replace(/([.?*+;^$[\]\\(){}|-])/g, "\\$1")
        setUserLogin(user)
    }, [userLogin, setUserLogin])

    const handleOnBlur = useCallback((event) => {
        const {name} = event.target
        const status = userStatus
        const user = userLogin
        if(name === "username") {
            if(!user.username)
                status.username = true
            else status.username = false
        } else if (name === "password") {
            if(!user.password)
                status.password = true
            else status.password = false
        }
        setUserStatus(status)
    }, [userLogin, userStatus, setUserStatus])

    return <Grid className={classes.girdForm} container spacing={2}>
        <Grid item xs={6}>
            <div className="center-text pattern-dots-md max-w-20pc overflow-visible">
                <h1 className="text-pattern">LOGIN TING TING</h1>
            </div>
        </Grid>
        <Grid item xs={6}>
            <div className="pattern-diagonal-lines-sm">
                {console.log(userStatus.username)}
                <FormLogin
                    userLogin={userLogin}
                    userStatus={userStatus}
                    onChangeHandle={onChangeHandle}
                    handleOnBlur={handleOnBlur}
                />
            </div>
        </Grid>
        <style jsx>{`
            .pattern-dots-md {
                margin-left: 10%;
                background-image: radial-gradient(currentColor 1px, transparent 1px);
                background-size: calc(10 * 1px) calc(10 * 1px);
            }
            .pattern-diagonal-lines-sm {
                width: 100%;
                background-image: repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%);
                background-size: 10px 10px;
            }
            .text-pattern {
                line-height: 1 !important;
                color: #000;
                font-size: 7rem;
                padding-left: 8rem;
                margin-top: 0px;
            }
            .overflow-visible {
                overflow: visible !important;
            }
            .max-w-20pc {
                max-width: 40% !important;
                height: 100%;
            }
        `}</style>
    </Grid>
}