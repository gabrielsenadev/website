import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('should render', () => {
    render(<Header username='Kitten' title='Catdeveloper' logoSrc='http://placekitten.com/100/100' />);
    const header = screen.getByTestId('app-header');
    expect(header).toBeInTheDocument();
  });
});
