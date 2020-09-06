import React from 'react';
import PropTypes from 'prop-types';
import ButtonLink from './common/ButtonLink';

const LaunchSuccessFilter = ({ title, launchSuccess, onLaunchSuccessChange }) => (
  <div className="filter-section">
    <span className="filter-label">{title}</span>
    <hr className="line" />
    <div className="is-primary">
      <ButtonLink
        value="True"
        launchSuccess={launchSuccess}
        buttonClick={onLaunchSuccessChange}
      />
      <ButtonLink
        value="False"
        launchSuccess={launchSuccess}
        buttonClick={onLaunchSuccessChange}
      />
    </div>
  </div>
);

LaunchSuccessFilter.propTypes = {
  title: PropTypes.string,
  launchSuccess: PropTypes.string,
  onLaunchSuccessChange: PropTypes.func,
};

export default LaunchSuccessFilter;
