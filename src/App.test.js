import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('switches to the About page when the About link is clicked', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('link', { name: /about/i }));

  expect(screen.getByText(/about us/i)).toBeInTheDocument();
});
