import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('should render', () => {
    const header = render(<Header />);
    expect(header.container).toBeInTheDocument();
  });

  it('should render in mobile mode', () => {
    jest
    .spyOn(require('react-responsive'), 'useMediaQuery')
    .mockImplementationOnce(() => true)
    const header = render(<Header />);
    expect(header.container).toBeInTheDocument();
    expect(screen.queryByTestId('mobile-header')).toBeInTheDocument();
    expect(screen.queryByTestId('desktop-header')).toBeNull();
  });

  it('should render in desktop mode', () => {
    jest
    .spyOn(require('react-responsive'), 'useMediaQuery')
    .mockImplementationOnce(() => false)
    const header = render(<Header />);
    expect(header.container).toBeInTheDocument();
    expect(screen.queryByTestId('mobile-header')).toBeNull();
    expect(screen.queryByTestId('desktop-header')).toBeInTheDocument();
  });
});
