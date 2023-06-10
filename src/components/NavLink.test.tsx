import { render, screen, waitFor } from '@testing-library/react';
import { NavLink } from './NavLink';
import { AiFillAlert } from 'react-icons/ai';

describe('NavLink', () => {
  it('should render', async () => {
    const result = render(<NavLink href='/' label='Home' icon={<AiFillAlert />} />);
    expect(result.container).toBeInTheDocument();
    expect(screen.queryByText('Home')).toBeInTheDocument();
    expect(screen.queryByRole('link')).toHaveAttribute('href', '/');
  });

  it('should render only with label', () => {
    const result = render(<NavLink href='/' label='Home' />);
    expect(result.container).toBeInTheDocument();
    expect(screen.queryByText('Home')).toBeInTheDocument();
    const icon = screen.queryByTestId('icon-link');
    expect(icon).toBeNull();
  });

  it('should render only with icon', () => {
    const result = render(<NavLink href='/' icon={<AiFillAlert />} />);
    expect(result.container).toBeInTheDocument();
    expect(screen.queryByText('Home')).toBeNull();
    const icon = screen.queryByTestId('icon-link');
    expect(icon).toBeInTheDocument();
    expect(result.container).not.toHaveClass('text-blue');
  });

  it('should highlight link if is the same url', () => {
    jest.mock('next/navigation', () => ({
      usePathname: () => '/',
    }));
    const result = render(<NavLink href='/' label='Home' icon={<AiFillAlert />} />);
    expect(result.container).toBeInTheDocument();
    expect(screen.queryByText('Home')).toBeInTheDocument();
    expect(screen.queryByRole('link')).toHaveAttribute('href', '/');
    waitFor(() => {
      expect(result.container).toHaveClass('text-blue');
    });
  });
});
