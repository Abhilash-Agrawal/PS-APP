import React from 'react';
import PropTypes from 'prop-types';

const ButtonLink = ({ buttonClick, value }) => (
  <button type="button" className="button" onClick={() => buttonClick(value)}>
    {value}
  </button>
);

ButtonLink.propTypes = {
  buttonClick: PropTypes.func,
  value: PropTypes.string,
};
export default ButtonLink;
