import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';

describe('Navbar', () => {
  it('should render', () => {
    const links = [
      {
        label: 'Item',
        href: '/',
      },
      {
        label: 'Element 2',
        href: '/two',
      }
    ];
    render(<Navbar links={links}/>);
    const navbar = screen.getByTestId('navbar');
    expect(navbar).toBeInTheDocument();
    expect(navbar).toBeValid();
    expect(navbar).toBeVisible();
    expect(navbar.children).toHaveLength(2);
  });
});
