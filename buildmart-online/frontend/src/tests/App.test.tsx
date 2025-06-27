import { render, screen } from '@testing-library/react';
import App from '../pages/App';
import { BrowserRouter } from 'react-router-dom';

test('renders without crashing', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByText(/BuildMart Online/i)).toBeInTheDocument();
});
