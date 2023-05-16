import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('should be an img tag with default styles classes', () => {
    render(<Avatar logoSrc='http://placekitten.com/100/100' username='Kitten Should'/>)
    const image = screen.getByAltText('Kitten Should');
    expect(image).toBeValid();
    expect(image).toBeVisible();
    expect(image).toHaveClass('rounded-full border-4 border-solid border-slate-50 hover:border-sky-400 ease-in duration-150')
  });

  it('should pass custom class', () => {
    render(<Avatar logoSrc='http://placekitten.com/100/100' username='Kitten Should' className='custom-class'/>)
    const image = screen.getByAltText('Kitten Should');
    expect(image).toHaveClass('rounded-full border-4 border-solid border-slate-50 hover:border-sky-400 ease-in duration-150 custom-class')
  });
});
