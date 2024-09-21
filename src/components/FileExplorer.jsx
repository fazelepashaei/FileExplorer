import React, { useState } from 'react';

import DuplicateChecker from './CheckDuplicate';
import ErrorModal from './ErrorModal'; // Import ErrorModal
import Folder from './Folder';
import NameInputModal from './NameInputModal';

// import ItemAdder from './ItemAdder';
const FileExplorer = () => {
    const [structure, setStructure] = useState([
        {
            id: 1,
            name: 'Root',
            isFolder: true,
            children: []
        }
    ]);

    const [modalOpen, setModalOpen] = useState(false);
    const [isFolder, setIsFolder] = useState(true);
    const [parentId, setParentId] = useState(null);
    const [errorModalOpen, setErrorModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const addItem = (parentId, isFolder) => {
        setParentId(parentId);
        setIsFolder(isFolder);
        setModalOpen(true);
    };

    const handleSubmit = (itemName) => {
        if (DuplicateChecker.checkDuplicate(structure, itemName)) {
            setErrorMessage(`${isFolder ? 'Folder' : 'File'} with the same name already exists.`);
            setErrorModalOpen(true);
            return;
        }

        const addToStructure = (items, parentId) => {
            return items.map(item => {
                if (item.id === parentId && item.isFolder) {
                    return {
                        ...item,
                        children: [
                            ...item.children,
                            {
                                id: Math.random(),
                                name: itemName,
                                isFolder,
                                children: isFolder ? [] : null
                            }
                        ]
                    };
                }
                if (item.children) {
                    return {
                        ...item,
                        children: addToStructure(item.children, parentId)
                    };
                }
                return item;
            });
        };

        setStructure(addToStructure(structure, parentId));
        setModalOpen(false);
    };

    const deleteItem = (parentId) => {
        const removeFromStructure = (items, parentId) => {
            return items.filter(item => item.id !== parentId).map(item => {
                if (item.children) {
                    return {
                        ...item,
                        children: removeFromStructure(item.children, parentId)
                    };
                }
                return item;
            });
        };

        setStructure(removeFromStructure(structure, parentId));
    };

    return (
        <div id="file-explorer">
            {structure.map(item => (
                <Folder
                    key={item.id}
                    item={item}
                    addItem={addItem}
                    deleteItem={deleteItem}
                    isRoot={true}
                />
            ))}
            <NameInputModal
                open={modalOpen}
                handleClose={() => setModalOpen(false)}
                handleSubmit={handleSubmit}
                isFolder={isFolder}
            />

            <ErrorModal
                open={errorModalOpen}
                onClose={() => setErrorModalOpen(false)}
                errorMessage={errorMessage}
            />
        </div>
    );
};

export default FileExplorer;
