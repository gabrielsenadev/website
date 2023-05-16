import { render, screen } from '@testing-library/react';
import { NavLink } from './NavLink';
import { AiFillAlert } from 'react-icons/ai';

describe('NavLink', () => {
  it('should render', () => {
    render(<NavLink href='/' label='Home' />);
    const link = screen.getByTestId('nav-link');
    expect(link).toBeValid();
    expect(link).toBeVisible();
    expect(link).toHaveTextContent('Home');
    expect(link).toHaveAttribute('href', '/');
  });

  it('should render with icon', () => {
    const component = render(<NavLink href='/posts' label='Home' icon={<AiFillAlert />} />)
    const link = component.getByTestId('nav-link');
    expect(link).toBeValid();
    expect(link).toBeVisible();
    expect(link).toHaveTextContent('Home');
    expect(link).toHaveAttribute('href', '/posts');
    const icon = component.getByTestId('nav-link-icon');
    expect(icon).toBeValid();
    expect(icon).toBeVisible();
  });
});
