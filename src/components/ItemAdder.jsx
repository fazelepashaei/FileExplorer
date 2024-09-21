import { Button } from '@mui/material';
// ItemAdder.js
import React from 'react';

const ItemAdder = ({ addItem }) => {
    return (
        <Button
            variant="contained"
            onClick={() => addItem(null, true)} // Pass parentId and isFolder as needed
        >
            Add Folder
        </Button>
    );
};

export default ItemAdder;
