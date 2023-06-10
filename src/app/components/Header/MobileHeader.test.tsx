import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MobileHeader } from './MobileHeader';

describe('MobileHeader', () => {
  it('should render', () => {
    const header = render(<MobileHeader />);
    expect(header.container).toBeInTheDocument();
  });

  it('should open the drawer', () => {
    const header = render(<MobileHeader />);
    expect(header.container).toBeInTheDocument();
    const menuBtn = screen.queryByLabelText('open drawer');
    expect(menuBtn).toBeInTheDocument();
    fireEvent.click(menuBtn!);
    waitFor(() => {
      expect(screen.queryByTestId('drawer-container')).toBeVisible();
    })
  });
});
