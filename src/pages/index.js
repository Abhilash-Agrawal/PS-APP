import React, { useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import axios from 'axios';
import ProgramList from '../components/ProgramList';
import Filter from '../components/Filter';
import * as constants from '../constants/constants';

const Index = ({ data, params }) => {
  const router = useRouter();
  const [launchYear, setLaunchYear] = useState();
  const [launchSuccess, setLaunchSuccess] = useState();
  const [landSuccess, setLandSuccess] = useState();

  const loadParams = (key, value) => {
    router.push({
      pathname: '/',
      query: Object.assign(params, { [key]: value }),
    });
  };

  const onLaunchYearChange = (year) => {
    setLaunchYear(year);
    loadParams('launchYear', year);
  };

  const onLaunchSuccessChange = (success) => {
    const value = (success === 'True');
    setLaunchSuccess(value);
    loadParams('launchSuccess', value);
  };

  const onLandSuccessChange = (success) => {
    const value = (success === 'True');
    setLandSuccess(value);
    loadParams('landSuccess', value);
  };

  return (
    <div className="xt-div">
      <header className="app-head">
        Space X Launch Programs
      </header>
      <section className="grid-container">
        <Filter
          className="grid-item filter"
          launchSuccess={launchSuccess}
          landSuccess={landSuccess}
          launchYear={launchYear}
          onLaunchYearChange={onLaunchYearChange}
          onLaunchSuccessChange={onLaunchSuccessChange}
          onLandSuccessChange={onLandSuccessChange}
        />
        <ProgramList
          className="grid-item program-column"
          programs={data}
        />
      </section>
      <footer className="footer">
        <span className="footer-text">
          <b>Developed by:</b> {constants.DEVELOPER_NAME}
        </span>
      </footer>
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const filters = `${query.launchSuccess ? `&launch_success=${query.launchSuccess === 'true'}` : ''}${query.landSuccess ? `&land_success=${query.landSuccess}` : ''}${query.launchYear ? `&launch_year=${query.launchYear}` : ''} `;
  const res = await axios.get(`https://api.spaceXdata.com/v3/launches?limit=100${filters}`);

  return {
    props: {
      data: res.data,
      params: query,
    },
  };
};

Index.propTypes = {
  data: PropTypes.array,
  params: PropTypes.object,
};

export default Index;
