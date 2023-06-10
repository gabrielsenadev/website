import { render, screen, waitFor } from '@testing-library/react';
import Page from './page';

describe('Homepage', () => {
  it('should render', () => {
    render(<Page />);
    waitFor(() => {
      expect(screen.queryByRole('header')).toBeInTheDocument();
      expect(screen.queryByRole('main')).toBeInTheDocument();
      expect(screen.queryByRole('footer')).toBeInTheDocument();
    })
  });
});
