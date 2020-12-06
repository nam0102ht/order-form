import { Button, 
    Fade, 
    FormControl,
    FormHelperText,
    IconButton, 
    Input, 
    InputAdornment, 
    InputLabel, 
    Link, 
    Paper, 
    TextField
} from "@material-ui/core"
import styled from "styled-components"
import React, { useCallback, useEffect, useState } from "react"
import { Visibility, VisibilityOff } from "@material-ui/icons"
import CloseIcon from '@material-ui/icons/Close'
import { useRouter } from "next/router"
import Alert from '@material-ui/lab/Alert'
import axios from "axios"

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
const FormUserNameError = styled(FormControl)`
    width: 100%;
`
export default function FormLogin({...props}) {
    const router = useRouter()
    const [values, setValues] = React.useState({
        showPassword: false,
    });
    const [servity, setServity] = useState()
    const [messRes, setMessRes] = useState()
    const [isShow, setIsShow] = useState(false)
    const [closeAlert, setCloseAlert] = useState(true)
    
    useEffect(async () => {
        const data = await axios.get('/api/me')
        if(data.data.user) {
            router.push('/')
        }
    })

    const handleClickShowPassword = () => {
        setValues({ showPassword: !values.showPassword });
    }
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    const onClickHandle = useCallback(async (event) => {
        event.preventDefault()
        let user = await axios({
            method: 'post',
            url: "http://localhost:3000/api/login",
            headers: { 
                'Content-Type': 'application/json'
            },
            data : JSON.stringify(props.userLogin)
        })
        if(user.data.status !== 200) {
            setMessRes(user.data.message)
            setServity('error')
            setIsShow(true)
            return
        }
        setMessRes("User login success")
        setServity('success')
        setIsShow(true)
        router.push("/")
    }, [props.userLogin, servity, messRes, setServity, setMessRes])

    return (<PaperCustom>
        <FormLoginCustom>
            {!props.userStatus.username ?
                <TextStyle
                    name="username"
                    label="Username:"
                    multiline
                    placeholder="Username"
                    rowsMax={4}
                    value={props.userLogin.username}
                    onChange={props.onChangeHandle}
                    onBlur={props.handleOnBlur}
                /> : <FormUserNameError error>
                    <InputLabel htmlFor="component-error">Username</InputLabel>
                    <Input
                    id="component-error"
                    value={props.userLogin.username}
                    onChange={props.onChangeHandle}
                    aria-describedby="component-error-text"
                    />
                    <FormHelperText id="component-error-text">Username is require</FormHelperText>
                </FormUserNameError>
            }
            <FormControlCustom>
                <InputLabel htmlFor="standard-adornment-password">Password:</InputLabel>
                <InputCustom
                    error={props.userStatus.password}
                    id="standard-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={props.userLogin.password}
                    name="password"
                    onChange={props.onChangeHandle}
                    rowsMax={4}
                    onBlur={props.handleOnBlur}
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
            <FormControlCustom>
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
// FormLogin.getInitialProps = async (ctx) => {
//     console.log(ctx)
//     let initialLoginStatus =  true
//     const data = await axios.get('/api/me')
//     console.log(data.data)
//     if(data.data.status === 200) initialLoginStatus = false
//     return {}
// }