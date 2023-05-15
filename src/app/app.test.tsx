import { render, screen } from '@testing-library/react';
import Page from './page';

describe('Homepage', () => {
    it('should contains the heading 1', () => {
    render(<Page />);
        const heading = screen.getByText(/Hello world!/i);
        expect(heading).toBeInTheDocument();
    });
    it('should contains the heading 2', () => {
    render(<Page />);
        const heading = screen.getByText(/Hello world 2!/i);
        expect(heading).toBeInTheDocument();
    });
});
