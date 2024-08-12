import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { WinnerDisplay } from './WinnerDisplay.extended';

// TODO complete tests
describe('WinnerDisplayExtended', () => {
  it('renders the winner text correctly', () => {
    render(<WinnerDisplay text="Dead Unicorn" />);
    const monsterTitle = screen.getByText('Dead Unicorn wins!');

    expect(monsterTitle).toBeInTheDocument();
  });
});
