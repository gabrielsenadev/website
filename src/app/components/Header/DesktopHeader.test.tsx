import { render } from '@testing-library/react';
import { DesktopHeader } from './DesktopHeader';

describe('DesktopHeader', () => {
  it('should render', () => {
    const header = render(<DesktopHeader />);
    expect(header.container).toBeInTheDocument();
  });
});
