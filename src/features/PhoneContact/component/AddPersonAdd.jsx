import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'

AddPersonAdd.propTypes = {
    isDiaLog: PropTypes.bool.isRequired,
    setIsDiaLog: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

function AddPersonAdd({ isDiaLog, setIsDiaLog, onSubmit }) {
    const [ fullName, setFullName ] = useState('');
    const [ phoneNumber, setPhoneNumber ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ files, setFiles ] = useState([]);
    const handleClick = () => {
        const newdata = {
            name: fullName,
            phone: phoneNumber,
            email: email,
            avatar: "/placeholder.svg?height=40&width=40",
            favorite: false,
        }
        if (onSubmit) {
            onSubmit(newdata)
        }
        setIsDiaLog(false)
    }
    const handleAction = () => {
        setIsDiaLog(false)
    }

    const handleFileChange = (event) => {
        setFiles(event.target.files);
    };

    return (
        <Dialog aria-labelledby="customized-dialog-title" open={isDiaLog}>
            <DialogTitle sx={{ m: 0, p: 2 }}>Thêm liên lạc</DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleAction}
                sx={{ position: 'absolute', right: 8, top: 8 }}
            >
                <CloseIcon />
            </IconButton>
            <form>
                <DialogContent dividers>
                    <Box display="flex" gap={2} flexDirection="column">
                        <TextField
                            label="Họ và tên"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <TextField
                            label="Số điện thoại"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <TextField
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input type="file" multiple accept="image/*" onChange={handleFileChange} />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClick} autoFocus >
                        Thêm
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}

export default AddPersonAdd;