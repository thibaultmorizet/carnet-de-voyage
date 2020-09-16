import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// Style the Button component
const Button = styled.button``;

const FileUploader = ({ onChange }) => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    onChange(fileUploaded, 'picture');
  };
  return (
    <>
      <p className="text__fileButton">Ajouter une photo</p>
      <Button type="button" className="fileButton" onClick={handleClick}>
        +
      </Button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: 'none' }}
        className="fileButton__second"
      />
    </>
  );
};

FileUploader.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default FileUploader;
