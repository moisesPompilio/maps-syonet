/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { InfoWindowMap } from './InfoWindowMap';

describe('InfoWindowMap', () => {
  const props = {
    title: 'Test Title',
    image: 'test-image.jpg',
    detail: 'Test Detail',
    googleMapsUrl: 'https://example.com/',
  };

  it('should render the component with correct props', () => {
    render(<InfoWindowMap {...props} />);

    const titleElement = screen.getByText(props.title);
    const imageElement = screen.getByAltText(props.title) as HTMLImageElement;
    const detailElement = screen.getByText(props.detail);
    const linkElement = screen.getByText(
      `Ir até ${props.title}`,
    ) as HTMLAnchorElement;

    expect(titleElement).toBeInTheDocument();
    expect(imageElement.src).toContain(props.image);
    expect(detailElement).toBeInTheDocument();
    expect(linkElement.href).toBe(props.googleMapsUrl);
  });

  it('should have the correct SCSS class for the image', () => {
    render(<InfoWindowMap {...props} />);

    const imageElement = screen.getByAltText(props.title);

    expect(imageElement).toHaveClass('img-cover');
  });

  it('should open the Google Maps link in a new tab', () => {
    render(<InfoWindowMap {...props} />);

    const linkElement = screen.getByText(
      `Ir até ${props.title}`,
    ) as HTMLAnchorElement;

    expect(linkElement.target).toBe('_blank');
    expect(linkElement.rel).toBe('noreferrer');
  });
});
