import { render } from '@testing-library/react';
import { UserTitle } from './UserTitle';

describe('UserTitle', () => {
  it('should render', () => {
    const el = render(<UserTitle />);
    expect(el.container).toBeInTheDocument();
  });
});
