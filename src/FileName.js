import React from 'react';
import PropTypes from 'prop-types';

const FileName = ({ file }) => {
    return (
        <>
        <FileIcon file={file}/>
        <span className='file-name'>{file.name}</span>
        </>
    );
};

FileName.propTypes = {
    file: PropTypes.object.isRequired
};

function FileIcon({ file }) {
    let icon = 'fa-file-text-o';
    if (file.type === 'folder') {
        icon = 'fa-folder';
    }

    return ( 
        <span className = "file-icon" >
            <i className = {`fa ${icon}`}/>
        </span>
    );
}

FileIcon.propTypes = {
    file: PropTypes.object.isRequired
};

export default FileName;