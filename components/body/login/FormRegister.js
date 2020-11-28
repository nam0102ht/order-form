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
import React, { useCallback, useState } from "react"
import { Visibility, VisibilityOff } from "@material-ui/icons"
import CloseIcon from '@material-ui/icons/Close'
import registerUser from "../../../utils/hooks/register"
import { useRouter } from "next/router"
import Alert from "@material-ui/lab/Alert"



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

const FadeCustom = styled(Fade)`
    position: absolute;
    right: -8rem;
    bottom: -2rem;
    left: 0px;
    z-index: 999;
`

export default function FormRegister() {
    const router = useRouter()
    const [userForm, setUserForm] = useState({})
    const [values, setValues] = useState({
        showPassword: false,
        showRePassword: false
    });
    const [servity, setServity] = useState()
    const [messRes, setMessRes] = useState()
    const [isShow, setIsShow] = useState(false)
    const [closeAlert, setCloseAlert] = useState(true)

    const onChangeHandle = useCallback((event) => {
        let user = userForm
        const {name, value} = event.target
        user[name] = value
        setUserForm(user)
    }, [userForm, setUserForm])

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
        let result = await registerUser(userForm)
        if(result.status == -1) {
            setServity('warning')
            setMessRes(result.message)
            setIsShow(true)
            return
        }
        if(result.status !== 200) {
            setServity('error')
            setMessRes(result.message)
            setIsShow(true)
            return
        }
        setMessRes("User register success")
        setServity('success')
        setIsShow(true)
        router.push("/login")
        event.preventDefault();
    }, [userForm])

    return (<PaperCustom>
        <FormLoginCustom>
            <TextStyle
                name="username"
                label="Username:"
                multiline
                placeholder="Username"
                rowsMax={4}
                value={userForm.username}
                onChange={event => onChangeHandle(event)}
            />
            <FormControlCustom>
                <InputLabel htmlFor="standard-adornment-password">Password:</InputLabel>
                <InputCustom
                    id="standard-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={userForm.password}
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
                    value={userForm.repassword}
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
                name="firstName"
                label="Firstname:"
                multiline
                placeholder="Firstname"
                rowsMax={4}
                value={userForm.firstName}
                onChange={event => onChangeHandle(event)}
            />
            <TextStyle
                name="lastName"
                label="Lastname:"
                multiline
                placeholder="Lastname"
                rowsMax={4}
                value={userForm.lastName}
                onChange={event => onChangeHandle(event)}
            />
            <TextStyle
                name="phoneNumber"
                label="Phone:"
                multiline
                placeholder="Phone"
                rowsMax={4}
                value={userForm.phomeNumber}
                onChange={event => onChangeHandle(event)}
            />
            <TextStyle
                name="email"
                label="Email:"
                multiline
                placeholder="Email"
                rowsMax={4}
                value={userForm.email}
                onChange={event => onChangeHandle(event)}
            />
            <Link href="/login">If account is registered, please login</Link>
            <ButtonCustom onClick={onClickHandle}>Register</ButtonCustom>
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