/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import { NavBar } from './NavBar';
import '@testing-library/jest-dom/extend-expect';

describe('NavBar', () => {
  it('should render the logo correctly', () => {
    render(<NavBar />);
    const logoElement = screen.getByAltText('logo');
    expect(logoElement).toBeInTheDocument();
  });

  it('should render the navbar title correctly', () => {
    render(<NavBar />);
    const syoText = screen.getByText('SYO');
    const netText = screen.getByText('NET');
    expect(syoText).toBeInTheDocument();
    expect(netText).toBeInTheDocument();
  });
});
