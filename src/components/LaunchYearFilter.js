import React from 'react';
import PropTypes from 'prop-types';
import * as constants from '../constants/constants';
import ButtonLink from './common/ButtonLink';

const LaunchYearFilter = ({ title, launchYear, onLaunchYearChange }) => (
  <div className="filter-section">
    <span className="filter-label">{title}</span>
    <hr className="line" />
    <div className="is-primary">
      {constants.YEARS.map((year) => (
        <ButtonLink
          key={year}
          value={year}
          launchYear={launchYear}
          buttonClick={onLaunchYearChange}
        />
      ))}
    </div>
  </div>
);

LaunchYearFilter.propTypes = {
  title: PropTypes.string,
  launchYear: PropTypes.string,
  onLaunchYearChange: PropTypes.func,
};

export default LaunchYearFilter;
