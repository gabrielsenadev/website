import { render, screen, waitFor } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('should render', () => {
    const header = render(<Header />);
    expect(header.container).toBeInTheDocument();
  });

  it('should render in mobile mode', () => {
    jest.mock('react-responsive', () => ({
      useMediaQuery: () => true,
    }));
    const header = render(<Header />);
    expect(header.container).toBeInTheDocument();
    waitFor(() => {
      expect(screen.queryByTestId('mobile-header')).toBeInTheDocument();
      expect(screen.queryByTestId('desktop-header')).toBeNull();
    });
  });

  it('should render in desktop mode', () => {
    jest.mock('react-responsive', () => ({
      useMediaQuery: () => true,
    }));
    const header = render(<Header />);
    expect(header.container).toBeInTheDocument();
    expect(screen.queryByTestId('mobile-header')).toBeNull();
    expect(screen.queryByTestId('desktop-header')).toBeInTheDocument();
  });
});
