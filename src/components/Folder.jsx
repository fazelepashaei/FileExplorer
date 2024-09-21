import React, { useState } from 'react';

import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import FolderIcon from '@mui/icons-material/Folder';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

const Folder = ({ item, addItem, deleteItem, isRoot = false, level = 0 }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ marginLeft: `${level * 20}px` }}>
            <div>
                <span onClick={() => setIsOpen(!isOpen)}>
                    {item.isFolder ? (isOpen ? <FolderCopyIcon /> : <FolderIcon />) : <TextSnippetIcon />} {item.name}
                </span>
                {item.isFolder && isOpen && (  // نمایش دکمه‌ها فقط زمانی که فولدر باز است
                    <>
                        <button onClick={() => addItem(item.id, true)}><CreateNewFolderIcon /></button>
                        {!isRoot && <button onClick={() => addItem(item.id, false)}><NoteAddIcon /></button>}
                        {!isRoot && <button onClick={() => deleteItem(item.id)}><DeleteIcon /></button>}
                    </>
                )}
                {/* دکمه حذف برای فایل‌ها */}
                {!item.isFolder && (
                    <button onClick={() => deleteItem(item.id)} style={{ marginLeft: '10px' }}>
                        <DeleteIcon />
                    </button>
                )}
            </div>

            {isOpen && item.children && (
                <div>
                    {item.children.map(child => (
                        <Folder
                            key={child.id}
                            item={child}
                            addItem={addItem}
                            deleteItem={deleteItem}
                            level={level + 1}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Folder;
