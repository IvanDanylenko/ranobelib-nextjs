import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

// Temporary test for CI/CD
// Jest needs at least one test to finish without errors

describe('MY test', () => {
  // eslint-disable-next-line jest/expect-expect
  it('should render Home Page', () => {
    render(<Home />);
    screen.debug();
  });
});
