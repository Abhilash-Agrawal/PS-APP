import React from 'react';
import PropTypes from 'prop-types';
import LaunchYearFilter from './LaunchYearFilter';
import LaunchSuccessFilter from './LaunchSuccessFilter';
import LandSuccessFilter from './LandSuccessFilter';
import * as constants from '../constants/constants';

const Filter = ({
  className, launchYear, launchSuccess, landSuccess, onLandSuccessChange,
  onLaunchSuccessChange, onLaunchYearChange,
}) => (
  <div className={className}>
    <span className="app-head filter-head">
      Filter
    </span>
    <LaunchYearFilter
      className="filterDiv"
      title={constants.LAUNCH_YEAR}
      launchYear={launchYear}
      onLaunchYearChange={onLaunchYearChange}
    />
    <LaunchSuccessFilter
      className="filterDiv"
      title={constants.SUCCESSFUL_LAUNCH}
      launchYear={launchSuccess}
      onLaunchSuccessChange={onLaunchSuccessChange}
    />
    <LandSuccessFilter
      className="filterDiv"
      title={constants.SUCCESSFUL_LAND}
      launchYear={landSuccess}
      onLandSuccessChange={onLandSuccessChange}
    />
  </div>
);

Filter.propTypes = {
  className: PropTypes.string,
  launchYear: PropTypes.number,
  launchSuccess: PropTypes.string,
  landSuccess: PropTypes.string,
  onLandSuccessChange: PropTypes.func,
  onLaunchSuccessChange: PropTypes.func,
  onLaunchYearChange: PropTypes.func,
};
export default Filter;
