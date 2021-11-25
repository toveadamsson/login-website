import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login-website link', () => {
  render(<App />);
  const linkElement = screen.getByText(/login website/i);
  expect(linkElement).toBeInTheDocument();
});
