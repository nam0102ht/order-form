import { Button, 
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
import React, { useCallback, useEffect, useState } from "react"
import callAuthenticate from "../../../utils/connect"
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
async function getInitialProps(ctx){
	if (!process.browser) {
    }
	return {}
}
export default function FormLogin({initialLoginStatus }) {
    const router = useRouter()
    const [userLogin, setUserLogin] = useState({})
    const [values, setValues] = React.useState({
        showPassword: false,
    });
    const [servity, setServity] = useState()
    const [messRes, setMessRes] = useState()
    const [isShow, setIsShow] = useState(false)
    const [closeAlert, setCloseAlert] = useState(true)
    const [loginStatus, setLoginStatus] = useState(initialLoginStatus || 'Loading...')

    async function getLoginStatus() {
		setLoginStatus('Loading...')

		try {
			const { email } = await axios.get('/api/proxy/me').then((response) => response.data)

			setLoginStatus(`Logged in as ${email}`)
		} catch (err) {
			setLoginStatus('Not logged in')
		}
	}


    useEffect(() => {
		if (!initialLoginStatus) {
			getLoginStatus()
		}
	}, [initialLoginStatus])

    const onChangeHandle = useCallback((event) => {
        let user = userLogin
        const {name, value} = event.target
        user[name] = value.replace(/([.?*+;^$[\]\\(){}|-])/g, "\\$1")
        setUserLogin(user)
    }, [userLogin, setUserLogin])

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
            data : JSON.stringify(userLogin)
        })
        if(user.data.status !== 200) {
            setMessRes(user.data.message)
            setServity('warning')
            setIsShow(true)
            return
        }
        // router.push("/")
        setMessRes("User login success")
        setServity('success')
        setIsShow(true)
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
                onChange={onChangeHandle}
            />
            <FormControlCustom>
                <InputLabel htmlFor="standard-adornment-password">Password:</InputLabel>
                <InputCustom
                    id="standard-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={userLogin.password}
                    name="password"
                    onChange={onChangeHandle}
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
FormLogin.getInitialProps = getInitialProps