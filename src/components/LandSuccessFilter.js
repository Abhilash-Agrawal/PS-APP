import React from 'react';
import PropTypes from 'prop-types';
import ButtonLink from './common/ButtonLink';

const LandSuccessFilter = ({ title, landSuccess, onLandSuccessChange }) => (
  <div className="filter-section">
    <span className="filter-label">
      {title}
    </span>
    <hr className="line" />
    <div className="is-primary">
      <ButtonLink
        value="True"
        landSuccess={landSuccess}
        buttonClick={onLandSuccessChange}
      />
      <ButtonLink
        value="False"
        landSuccess={landSuccess}
        buttonClick={onLandSuccessChange}
      />
    </div>
  </div>
);

LandSuccessFilter.propTypes = {
  title: PropTypes.string,
  landSuccess: PropTypes.string,
  onLandSuccessChange: PropTypes.func,
};
export default LandSuccessFilter;
