import {
    Box,
    Button,
    Modal,
    TextField,
} from '@mui/material';
import React, { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: ' #493a3e',
    boxShadow: 24,
    borderRadius: '16px',
    p: 4,
};

const NameInputModal = ({ open, handleClose, handleSubmit, isFolder }) => {
    const [itemName, setItemName] = useState('');

    const onSubmit = () => {
        if (!itemName) {
            alert('Please enter a name');
            return;
        }
        handleSubmit(itemName);
        setItemName('');
        handleClose();
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <h2 style={{ color: "#ED1844" }}>{`Enter ${isFolder ? 'folder' : 'file'} name:`}</h2>
                <TextField
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    label={isFolder ? 'Folder Name' : 'File Name'}
                    fullWidth
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#ED1844', // Default border color
                            },
                            '&:hover fieldset': {
                                borderColor: 'lightred', // Border color on hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'darkred', // Border color when focused
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: '#ED1844', // Label color
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: 'darkred', // Label color when focused
                        },
                    }}
                />
                <Button onClick={onSubmit} variant="contained"
                    sx={{
                        mt: 2,
                        backgroundColor: '#ED1844',       // Blue background color
                        border: '2px solid #ED1844',       // Blue border
                        color: 'white',                 // White text
                        '&:hover': {
                            backgroundColor: 'lightred', // Lighter blue on hover
                            border: '2px solid #ED1844',     // Keeping the blue border on hover
                        },
                    }}
                >
                    Submit
                </Button>
            </Box>
        </Modal>
    );
};

export default NameInputModal;
