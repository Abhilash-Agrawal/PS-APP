import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import '../../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="XT-PS">
      <Head>
        <title>PS-XT</title>
        <meta name="description" content="Displays list of Space X Launch Programs and provide options to filter them" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default MyApp;
