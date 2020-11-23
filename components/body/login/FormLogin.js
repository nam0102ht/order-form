import { Button, 
    FormControl,
    IconButton, 
    Input, 
    InputAdornment, 
    InputLabel, 
    Link, 
    Paper, 
    TextField
} from "@material-ui/core"
import styled from "styled-components"
import React, { useCallback, useState } from "react"
import callAuthenticate from "../../../utils/connect"
import generateJwtToken from "../../../utils/generate"
import { Visibility, VisibilityOff } from "@material-ui/icons"
import { Router, useRouter } from "next/router"



const PaperCustom =styled(Paper)`
    width: 80%;
    height: 100%;
    transform: translate(-10px, 10px);
`

const FormLoginCustom = styled(FormControl)`
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    padding: 6rem;
`

const TextStyle = styled(TextField)`
    width: 100%;
    margin: 0 0.5rem 0.5rem 0;
`

const FormControlCustom = styled(FormControl)`
    width: 100%;
    margin: 0 0.5rem 0.5rem 0;
`
const InputCustom = styled(Input)`
    width: 100%;
`
const ButtonCustom = styled(Button)`
    width: 8rem;
    margin: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.23);
`

export default function FormLogin() {
    const router = useRouter()
    const [userLogin, setUserLogin] = useState({})
    const [values, setValues] = React.useState({
        showPassword: false,
    });

    const onChangeHandle = useCallback((event) => {
        let user = userLogin
        const {name, value} = event.target
        user[name] = value
        setUserLogin(user)
    }, [userLogin, setUserLogin])

    const handleClickShowPassword = () => {
        setValues({ showPassword: !values.showPassword });
    }
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    const onClickHandle = useCallback(async (event) => {
        let user = await callAuthenticate(userLogin)
        localStorage.setItem("user", JSON.stringify(user))
        let userItem =  localStorage.getItem("user")
        let token = await generateJwtToken(userItem)
        localStorage.setItem("token", token)
        router.push("/")
        event.preventDefault()
    }, [userLogin])

    return (<PaperCustom>
        <FormLoginCustom>
            <TextStyle
                name="username"
                label="Username:"
                multiline
                placeholder="Username"
                rowsMax={4}
                value={userLogin.username}
                onChange={event => onChangeHandle(event)}
            />
            <FormControlCustom>
                <InputLabel htmlFor="standard-adornment-password">Password:</InputLabel>
                <InputCustom
                    id="standard-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={userLogin.password}
                    name="password"
                    onChange={event => onChangeHandle(event)}
                    rowsMax={4}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
            </FormControlCustom>
            <Link href="/register">Register account if haven't yet</Link>
            <ButtonCustom onClick={onClickHandle}>Login</ButtonCustom>
        </FormLoginCustom>
    </PaperCustom>)
}