/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Footer } from './Footer';

describe('Footer', () => {
  test('should render the footer component correctly', () => {
    render(<Footer />);

    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();

    const linksTitleElement = screen.getByText('Links');
    expect(linksTitleElement).toBeInTheDocument();

    const linksSection = screen
      .getByRole('heading', { name: 'Links' })
      .closest('.footer-item') as HTMLElement;

    const links = linksSection.querySelectorAll('a');

    expect(links).toHaveLength(3);

    const companyTitleElement = screen.getByText('conheça a Syonet');
    expect(companyTitleElement).toBeInTheDocument();

    const companyLinks = screen.getAllByRole('link', {
      name: /Informações|Cases|Contato/,
    });

    expect(companyLinks).toHaveLength(3);

    const creatorContactTitleElement = screen.getByText(
      'Contato do criador dessa pargina',
    );
    expect(creatorContactTitleElement).toBeInTheDocument();

    const creatorContactInfoElements = screen.getAllByText(
      /moisesalexandrep.c@gmail.com/,
    );
    expect(creatorContactInfoElements).toHaveLength(1);
  });

  test('should open links in a new tab', () => {
    render(<Footer />);

    const links = screen.getAllByRole('link');

    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noreferrer noopener');
    });
  });
});
