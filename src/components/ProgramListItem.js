import React from 'react';
import PropTypes from 'prop-types';

const ProgramListItem = ({ program }) => (
  <div className="programs-item">
    <img src={program.links && program.links.mission_patch} alt="img" className="program-image" />
    <span className="card-head">
      {program.mission_name}<span> #</span>{program.flight_number}
    </span>
    <span className="card-line">
      <span className="pragram-label">
        Mission Ids:
      </span>
      {program.mission_id && program.mission_id.length > 0 && program.mission_id.map((id) => (
        <span className="pragram-value" key={id}>
          <ul className="program-list">
            <li>{id}</li>
          </ul>
        </span>
      ))}
    </span>
    <span className="card-line">
      <span className="pragram-label">
        Launch Year:
      </span>
      <span className="pragram-value">
        {program.launch_year}
      </span>
    </span>
    <span className="card-line">
      <span className="pragram-label">
        Successful Launch:
      </span>
      <span className="pragram-value">
        {program.launch_success ? 'true' : 'false'}
      </span>
    </span>
    <span className="card-line">
      <span className="pragram-label">
        Successful Landing:
      </span>
      <span className="pragram-value">
        {program.rocket && program.rocket.first_stage && program.rocket.first_stage.cores && program.rocket.first_stage.cores.length > 0 && program.rocket.first_stage.cores[0].land_success ? 'true' : 'false'}
      </span>
    </span>
  </div>
);

ProgramListItem.propTypes = {
  program: PropTypes.object,
};

export default ProgramListItem;
