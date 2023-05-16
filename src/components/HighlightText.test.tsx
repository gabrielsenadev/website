import { render } from '@testing-library/react';
import { HighlightText } from './HighlightText';

describe('HighlightText', () => {
  it('should renders', () => {
    const { getByText, container } = render(<HighlightText text='Hello Dude' highlightClassName='hover:text-sky-300'/>);
    expect(container).toBeVisible();
    expect(container).toBeValid();
    ['Hello', 'Dude'].forEach(element => {
      const text = getByText(element)
      expect(text).toHaveClass('hover:text-sky-300 transition ease-in duration-1000 hover:duration-75');
      expect(text).toBeValid();
      expect(text).toBeVisible();
    });
  });

});
