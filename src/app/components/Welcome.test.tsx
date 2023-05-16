import { render, screen } from '@testing-library/react';
import { Welcome } from './Welcome';

describe('Header', () => {
  it('should render', () => {
    render(<Welcome />);
    const header = screen.getByTestId('welcome');
    expect(header).toBeInTheDocument();
  });
});
