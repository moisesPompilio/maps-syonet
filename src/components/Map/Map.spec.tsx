/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { Map } from './Map';

jest.mock('../../util/globalVariables.ts', () => ({
  GOOGLE_MAPS_API_KEY: jest.fn(() => 'api_key'),
}));
jest.mock('@react-google-maps/api', () => ({
  GoogleMap: jest.fn(({ children }) => <div>{children}</div>),
  InfoWindow: jest.fn(({ children }) => <div>{children}</div>),
  Marker: jest.fn(({ onClick }) => (
    <div onClick={onClick}>Mocked Marker Component</div>
  )),
  useJsApiLoader: jest.fn(() => ({
    isLoaded: true,
  })),
}));

describe('Map', () => {
  test('should render the map component correctly', () => {
    const props = {
      lat: 12.345,
      lng: 67.89,
      text: 'Location',
      image: 'https://example.com/image.jpg',
      detail: 'Location details',
    };

    render(<Map {...props} />);

    const mapElement = screen.getByTestId('map');
    expect(mapElement).toBeInTheDocument();

    const markerElement = screen.getByText('Mocked Marker Component');
    expect(markerElement).toBeInTheDocument();

    const infoWindowElement = screen.getByTestId('info-window');
    expect(infoWindowElement).toBeInTheDocument();

    fireEvent.click(markerElement);
    expect(infoWindowElement).toBeInTheDocument();
  });
});
