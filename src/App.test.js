import { render, screen } from '@testing-library/react';
import App from './App';

it('should renders welcome message', () => {
  render(<App />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
});
