import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'

AddPersonAdd.propTypes = {
    isDialog: PropTypes.bool.isRequired,
};

function AddPersonAdd({ isDialog }) {

    console.log(isDialog)
    return (
        <Dialog aria-labelledby="customized-dialog-title" open={isDialog}>
            <DialogTitle sx={{ m: 0, p: 2 }}>Thêm liên lạc</DialogTitle>
            <IconButton
                aria-label="close"
                // onClick={() => handleAction(activeAction, dispatch, { add, edit, del, view })}
                sx={{ position: 'absolute', right: 8, top: 8 }}
            >
                <CloseIcon />
            </IconButton>
            <form>
                <DialogContent dividers>
                    <Box display="flex" gap={2} flexDirection="column">
                        <TextField></TextField>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus >
                        Thêm
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}

export default AddPersonAdd;