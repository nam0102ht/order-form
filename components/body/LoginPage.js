import { Grid, makeStyles } from "@material-ui/core"
import React from "react"
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

    return <Grid className={classes.girdForm} container spacing={2}>
        <Grid item xs={6}>
            <div className="center-text pattern-dots-md max-w-20pc overflow-visible">
                <h1 className="text-pattern">LOGIN TING TING</h1>
            </div>
        </Grid>
        <Grid item xs={6}>
            <div className="pattern-diagonal-lines-sm">
                <FormLogin />
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