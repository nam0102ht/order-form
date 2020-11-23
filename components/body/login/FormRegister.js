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
    padding: 5rem;
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

export default function FormRegister() {
    const [userLogin, setUserLogin] = useState({})
    const [values, setValues] = useState({
        showPassword: false,
        showRePassword: false
    });

    const onChangeHandle = useCallback((event) => {
        let user = userLogin
        const {name, value} = event.target
        user[name] = value
        setUserLogin(user)
    }, [userLogin, setUserLogin])

    const handleClickShowPassword = () => {
        setValues({ showRePassword: !values.showRePassword })
    }

    const handleClickShowRePassword = () => {
        setValues({ showRePassword: !values.showRePassword })
    }
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    const onClickHandle = useCallback(async (event) => {
        let user = await callAuthenticate(userLogin)
        localStorage.setItem("user", JSON.stringify(user))
        let userItem =  localStorage.getItem("user")
        console.log(userItem)
        console.log(await generateJwtToken(userItem))
        event.preventDefault();
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
            <FormControlCustom>
                <InputLabel htmlFor="standard-adornment-repassword">Confirm Password:</InputLabel>
                <InputCustom
                    id="standard-adornment-repassword"
                    type={values.showRePassword ? 'text' : 'password'}
                    value={userLogin.repassword}
                    name="repassword"
                    onChange={event => onChangeHandle(event)}
                    rowsMax={4}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowRePassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                        {values.showRePassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
            </FormControlCustom>
            <TextStyle
                name="firstname"
                label="Firstname:"
                multiline
                placeholder="Firstname"
                rowsMax={4}
                value={userLogin.firstname}
                onChange={event => onChangeHandle(event)}
            />
            <TextStyle
                name="lastname"
                label="Lastname:"
                multiline
                placeholder="Lastname"
                rowsMax={4}
                value={userLogin.firstname}
                onChange={event => onChangeHandle(event)}
            />
            <TextStyle
                name="phoneNumber"
                label="Phone:"
                multiline
                placeholder="Phone"
                rowsMax={4}
                value={userLogin.firstname}
                onChange={event => onChangeHandle(event)}
            />
            <TextStyle
                name="email"
                label="Email:"
                multiline
                placeholder="Email"
                rowsMax={4}
                value={userLogin.firstname}
                onChange={event => onChangeHandle(event)}
            />
            <Link href="/register">If account is registered, please login</Link>
            <ButtonCustom onClick={onClickHandle}>Register</ButtonCustom>
        </FormLoginCustom>
    </PaperCustom>)
}