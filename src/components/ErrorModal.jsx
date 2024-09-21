// ErrorModal.js
import { Box, Button, Modal, Typography } from '@mui/material';

import React from 'react';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#ED1844',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
};

const ErrorModal = ({ open, onClose, errorMessage }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={modalStyle}>
                <Typography variant="h6" gutterBottom>
                    !Error
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {errorMessage}
                </Typography>
                <Button
                    variant="contained"
                    onClick={onClose}
                    sx={{
                        mt: 2,
                        backgroundColor: '#ED1844',
                        border: '2px solid #ED1844',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'lightred',
                            border: '2px solid #ED1844',
                        },
                    }}
                >
                    Close
                </Button>
            </Box>
        </Modal>
    );
};

export default ErrorModal;
