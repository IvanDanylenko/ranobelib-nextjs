import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Link from 'src/components/utils/Link';

describe('utils/Link', () => {
  // test('renders Link component', () => {
  //   const href = '/';

  //   const link = render(<Link href={href}>Link to domain root</Link>);

  //   // const link = screen.getByT

  //   // screen.debug();
  //   expect(screen.getByRole('link')).toHaveAttribute('href');
  //   // const text = screen.getByText(/Link/);
  //   // console.log('🚀 ~ text', text);

  //   // expect(text).toBeInTheDocument();
  // });

  test('have to contain JavaScript value', async () => {
    const onChange = jest.fn();

    render(<Link onChange={onChange} />);

    await userEvent.type(screen.getByRole('textbox'), 'Javascript');

    expect(onChange).toHaveBeenCalledTimes(10);
  });
});
