import React from 'react';
import styled from 'styled-components';
// Style the Button component
const Button = styled.button`

`;
const FileUploader = (props) => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };
  return (
    <>
      <p className="text__fileButton">Ajouter une photo</p>
      <Button className="fileButton" onClick={handleClick}>
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

export default FileUploader;
