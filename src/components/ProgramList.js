import React from 'react';
import PropTypes from 'prop-types';
import ProgramListItem from './ProgramListItem';

const ProgramList = ({ programs }) => (
  <div className=".grid-item programs-container">
    {programs && programs.length > 0
      ? (programs.map((program) => (
        program ? <ProgramListItem key={program.mission_name} program={program} /> : ''
      )))
      : <span>No programs found</span>}
  </div>
);

ProgramList.propTypes = {
  programs: PropTypes.array,
};
export default ProgramList;
