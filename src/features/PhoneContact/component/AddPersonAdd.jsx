import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'

AddPersonAdd.propTypes = {
    isDiaLog: PropTypes.bool,
    setIsDiaLog: PropTypes.func,
    onSubmit: PropTypes.func.isRequired,
    data: PropTypes.object,
    edit: PropTypes.bool,
    setEdit: PropTypes.func
}
function AddPersonAdd({ isDiaLog, setIsDiaLog, onSubmit, data, edit, setEdit }) {
    const [ fullName, setFullName ] = useState("")
    const [ phoneNumber, setPhoneNumber ] = useState("")
    const [ email, setEmail ] = useState("")

    // Error states
    const [ nameError, setNameError ] = useState("")
    const [ phoneError, setPhoneError ] = useState("")
    const [ emailError, setEmailError ] = useState("")

    // Validation functions
    const validateName = (name: string) => {
        if (!name.trim()) {
            setNameError("Họ và tên không được để trống")
            return false
        }
        setNameError("")
        return true
    }

    const validatePhone = (phone: string) => {
        if (!phone.trim()) {
            setPhoneError("Số điện thoại không được để trống")
            return false
        }

        // Vietnamese phone number format: 10 digits, starting with 0
        const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})\b/
        if (!phoneRegex.test(phone)) {
            setPhoneError("Số điện thoại không hợp lệ (VD: 0912345678)")
            return false
        }

        setPhoneError("")
        return true
    }

    const validateEmail = (email: string) => {
        if (!email.trim()) {
            setEmailError("Email không được để trống")
            return false
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!emailRegex.test(email)) {
            setEmailError("Email không hợp lệ")
            return false
        }

        setEmailError("")
        return true
    }

    // Validate all fields
    const validateForm = () => {
        const isNameValid = validateName(fullName)
        const isPhoneValid = validatePhone(phoneNumber)
        const isEmailValid = validateEmail(email)

        return isNameValid && isPhoneValid && isEmailValid
    }

    const handleClick = () => {
        if (!validateForm()) {
            return
        }

        const newdata = {
            name: fullName,
            phone: phoneNumber,
            email: email,
            avatar: "/placeholder.svg?height=40&width=40",
            favorite: false,
        }

        if (data) {
            newdata.id = data.id
        }

        if (onSubmit) {
            onSubmit(newdata)
        }

        data ? setEdit && setEdit(false) : setIsDiaLog(false)
    }

    const handleAction = () => {
        data ? setEdit && setEdit(false) : setIsDiaLog(false)
    }

    useEffect(() => {
        if (data) {
            setFullName(data.name || "")
            setEmail(data.email || "")
            setPhoneNumber(data.phone || "")

            // Clear errors when editing
            setNameError("")
            setPhoneError("")
            setEmailError("")
        }
    }, [ data ])

    return (
        <Dialog aria-labelledby="customized-dialog-title" open={isDiaLog || !!edit}>
            <DialogTitle sx={{ m: 0, p: 2 }}>{edit ? "Sửa liên lạc" : "Thêm liên lạc"}</DialogTitle>
            <IconButton aria-label="close" onClick={handleAction} sx={{ position: "absolute", right: 8, top: 8 }}>
                <CloseIcon />
            </IconButton>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    handleClick()
                }}
            >
                <DialogContent dividers>
                    <Box display="flex" gap={2} flexDirection="column">
                        <TextField
                            label="Họ và tên"
                            value={fullName}
                            onChange={(e) => {
                                setFullName(e.target.value)
                                if (nameError) validateName(e.target.value)
                            }}
                            onBlur={() => validateName(fullName)}
                            error={!!nameError}
                            helperText={nameError}
                            fullWidth
                            required
                        />
                        <TextField
                            label="Số điện thoại"
                            value={phoneNumber}
                            onChange={(e) => {
                                setPhoneNumber(e.target.value)
                                if (phoneError) validatePhone(e.target.value)
                            }}
                            onBlur={() => validatePhone(phoneNumber)}
                            error={!!phoneError}
                            helperText={phoneError}
                            fullWidth
                            required
                        />
                        <TextField
                            label="Email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                                if (emailError) validateEmail(e.target.value)
                            }}
                            onBlur={() => validateEmail(email)}
                            error={!!emailError}
                            helperText={emailError}
                            fullWidth
                            required
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClick} autoFocus disabled={!fullName || !phoneNumber || !email}>
                        {edit ? "Cập nhật" : "Thêm"}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default AddPersonAdd;