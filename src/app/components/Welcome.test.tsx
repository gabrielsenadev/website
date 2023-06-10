import { render, screen } from '@testing-library/react';
import { Welcome } from './Welcome';

describe('Welcome', () => {
  it('should render', () => {
    render(<Welcome />);
    expect(screen.queryByRole('main')).toBeInTheDocument();
  });
});
