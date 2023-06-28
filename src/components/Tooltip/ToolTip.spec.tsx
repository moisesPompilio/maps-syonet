/* eslint-disable import/no-extraneous-dependencies */
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ToolTip } from './ToolTip';

const text = 'Tooltip Text';
const renderComponent = () => {
  render(<ToolTip text={text}>Hover Me</ToolTip>);
};
describe('ToolTip', () => {
  test('should not render without the mouse hovering over it', () => {
    renderComponent();

    const tooltipText = screen.queryByText(text);
    expect(tooltipText).not.toBeInTheDocument();
  });
  test('should render the component with the provided text', () => {
    renderComponent();

    const tooltipTrigger = screen.getByText('Hover Me');
    fireEvent.mouseEnter(tooltipTrigger);

    const tooltipText = screen.getByText(text);
    expect(tooltipText).toBeInTheDocument();
  });

  test('should hide the tooltip when mouse leaves', () => {
    renderComponent();

    const tooltipTrigger = screen.getByText('Hover Me');
    fireEvent.mouseEnter(tooltipTrigger);
    fireEvent.mouseLeave(tooltipTrigger);

    const tooltipText = screen.queryByText(text);
    expect(tooltipText).not.toBeInTheDocument();
  });
});
