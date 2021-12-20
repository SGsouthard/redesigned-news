import { render, screen } from '@testing-library/react';
import MainPage from './MainPage';

test('renders Text tag', () => {
    render(<MainPage />);
    const pElement = screen.getByText(/Mic check 1,2/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Text tag', () => {
    render(<MainPage />);
    const pElement = screen.getByText(/Custom 404/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Text tag', () => {
    render(<MainPage />);
    const pElement = screen.getByText(/December 24, 2022/i);
    expect(pElement).toBeInTheDocument();
});

