import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Drawer } from './Drawer';

describe('Drawer', () => {
  it('should render', () => {
    const result = render((
      <Drawer isOpen toggle={() => {}}>
        <p>content element</p>
      </Drawer>
    ));
    expect(result.container).toBeInTheDocument();
    expect(result.queryByText('content element')).toBeInTheDocument();
    expect(result.queryByTestId('drawer-overlay')).toBeInTheDocument();
    expect(result.queryByLabelText('close drawer')).toBeInTheDocument();
  });

  it('should be invisible when is not open', () => {
    const result = render((
      <Drawer isOpen={false} toggle={() => {}}>
        <p>content element</p>
      </Drawer>
    ));
    expect(result.container).toBeInTheDocument();
    expect(result.queryByTestId('drawer-container')).toHaveClass('translate-x-full')
    expect(result.queryByTestId('drawer-overlay')).toBeNull();
  });

  it('should be invisible after user interaction', () => {
    let isOpen = true;
    const toggleIsOpen = () => {
      isOpen = !isOpen;
    };
    const result = render((
      <Drawer isOpen={isOpen} toggle={toggleIsOpen}>
        <p>content element</p>
      </Drawer>
    ));
    expect(result.container).toBeInTheDocument();
    expect(result.queryByTestId('drawer-container')).toHaveClass('translate-x-0');
    expect(result.queryByTestId('drawer-overlay')).toBeInTheDocument();
    const closeBtn = screen.queryByLabelText('close drawer');
    expect(closeBtn).toBeInTheDocument();
    fireEvent.click(closeBtn!);
    waitFor(() => expect(result.queryByTestId('drawer-overlay')).toBeNull());
  });
});
