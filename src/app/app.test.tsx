import { render, screen } from '@testing-library/react';
import Page from './page';

describe('Homepage', () => {
  it('should render', () => {
    render(<Page />);
    const header = screen.getByTestId('app-header');
    expect(header).toBeInTheDocument();
    const welcome = screen.getByTestId('welcome');
    expect(welcome).toBeInTheDocument();
  });
});
