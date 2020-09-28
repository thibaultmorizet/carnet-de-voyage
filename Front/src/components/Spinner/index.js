import React from 'react';
import './styles.scss';
import { css } from '@emotion/core';
import CircleLoader from 'react-spinners/CircleLoader';

const Spinner = () => {
  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
  return (
    <div className="spinner">
      <div className="sweet-loading">
        <CircleLoader
          css={override}
          size={50}
          color="#123abc"
          loading
        />
      </div>

    </div>
  );
};

export default Spinner;
