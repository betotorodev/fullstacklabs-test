import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import monstersData from '../../../data/monsters.json';
import { MonsterBattleCard } from './MonsterBattleCard.extended';

const RedDragon = monstersData.monsters[2];

describe('MonsterBattleCardExtended', () => {
  it('renders the monster card correctly with a monster', () => {
    render(<MonsterBattleCard title={RedDragon.name} monster={RedDragon} />);
    const monsterTitle = screen.getByText('Red Dragon');

    expect(monsterTitle).toBeInTheDocument();
  });
});
