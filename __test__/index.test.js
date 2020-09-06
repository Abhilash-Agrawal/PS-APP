import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Index from '../src/pages/index';

const setup = (value) => {
  const {
    container, getByTestId, getAllByRole, getByText, queryByText, debug,
  } = render(
    <Index {...value} />,
  );

  return {
    container,
    getByTestId,
    getAllByRole,
    getByText,
    queryByText,
    debug,
  };
};

describe('Index Page', () => {
  it('Render Index Page with heading and filters', () => {
    const { getByText } = setup({});
    expect(getByText('Space X Launch Programs')).toBeInTheDocument();
    expect(getByText('Filters')).toBeInTheDocument();
    expect(getByText('Launch Year')).toBeInTheDocument();
    expect(getByText('Successful Launch')).toBeInTheDocument();
    expect(getByText('Successful Landing')).toBeInTheDocument();
  });

  it('Render Index Page with no programs, If not received through props', () => {
    const { getByText } = setup({});
    expect(getByText('No programs found')).toBeInTheDocument();
  });

  it('Programs should be displayed, If received through props', () => {
    const propsVal = {
      data: [
        {
          mission_name: 'ABC',
          flight_number: '101',
          mission_id: ['test1'],
          launch_year: '2000',
          launch_success: 'true',
        },
        {
          mission_name: 'DEF',
          flight_number: '111',
          mission_id: ['test2'],
          launch_year: '2001',
          launch_success: 'true',
        },
      ],
    };
    const { getByText } = setup(propsVal);
    expect(getByText('101', { exact: false })).toBeInTheDocument();
    expect(getByText('test1', { exact: false })).toBeInTheDocument();
    expect(getByText('2000', { exact: false })).toBeInTheDocument();
    expect(getByText('DEF', { exact: false })).toBeInTheDocument();
    expect(getByText('111', { exact: false })).toBeInTheDocument();
    expect(getByText('test2', { exact: false })).toBeInTheDocument();
    expect(getByText('2001', { exact: false })).toBeInTheDocument();
  });
});
