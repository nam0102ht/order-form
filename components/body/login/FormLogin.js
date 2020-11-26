import { Button, 
    Collapse, 
    Fade, 
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
import CloseIcon from '@material-ui/icons/Close'
import { Router, useRouter } from "next/router"
import Alert from '@material-ui/lab/Alert'



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
const FadeCustom = styled(Fade)`
    position: absolute;
    right: -8rem;
    bottom: -2rem;
    left: 0px;
    z-index: 999;
`
export default function FormLogin() {
    const router = useRouter()
    const [userLogin, setUserLogin] = useState({})
    const [values, setValues] = React.useState({
        showPassword: false,
    });
    const [servity, setServity] = useState()
    const [messRes, setMessRes] = useState()
    const [isShow, setIsShow] = useState(false)
    const [closeAlert, setCloseAlert] = useState(true)

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
        console.log(user)
        if(user.status == 57) {
            setServity('warning')
            setMessRes(user.message)
            setIsShow(true)
            return
        }
        if(user.status !== 200) {
            setServity('error')
            setMessRes(user.message)
            setIsShow(true)
            return
        }
        localStorage.setItem("user", JSON.stringify(user))
        let userItem =  localStorage.getItem("user")
        let token = await generateJwtToken(userItem)
        localStorage.setItem("token", token)
        router.push("/")
        setMessRes("User login success")
        setServity('success')
        setIsShow(true)
        event.preventDefault()
    }, [userLogin, servity, messRes, setServity, setMessRes])

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
                <Link href="/register">Register account if haven't yet</Link>
                <ButtonCustom onClick={onClickHandle}>Login</ButtonCustom>
            </FormControlCustom>
        </FormLoginCustom>
        { isShow ? <FadeCustom in={closeAlert}>
                        <Alert
                        severity={servity}
                        variant="filled"
                        action={
                            <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setCloseAlert(false);
                            }}
                            >
                            <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        >
                        {messRes}
                        </Alert>
                    </FadeCustom> : <></>}
    </PaperCustom>)
}