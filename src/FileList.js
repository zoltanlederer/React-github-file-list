import React from 'react';
import PropTypes from 'prop-types'

import FileListItem from './FileListItem';
// import FileName from './FileName';
// import CommitMessage from './CommitMessage';

const FileList = ({ files }) => {
    return (
      <table className='file-list'>
        <tbody>
          {files.map(file => {
            return (
              <FileListItem key={file.id} file={file}/>
            );
          })}
        </tbody>
      </table>
    );
  };
  
  FileList.propTypes = {
    files: PropTypes.array
  };

  export default FileList;