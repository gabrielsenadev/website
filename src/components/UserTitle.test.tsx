import { render, screen } from '@testing-library/react';
import { UserTitle } from './UserTitle';

describe('UserTitle', () => {
  it('should render', () => {
    const el = render(<UserTitle />);
    expect(el.container).toBeInTheDocument();
    expect(screen.queryByAltText('gabriel sena github profile image')).toBeInTheDocument();
    expect(screen.queryByText('Gabriel Sena')).toBeInTheDocument();
  });
});
