// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LitefsLitefs title', () => {
    render(<App />);
    const titleElement = screen.getByText(/LitefsLitefs/i);
    expect(titleElement).toBeInTheDocument();
});
