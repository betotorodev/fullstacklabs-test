import React from 'react';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { MonsterBattleCard } from '../../components/monster-battle-card/MonsterBattleCard.extended';
import { MonstersList } from '../../components/monsters-list/MonstersList.extended';
import { Title } from '../../components/title/Title';
import { fetchMonstersData } from '../../reducers/monsters/monsters.actions';
import {
  selectMonsters,
  selectSelectedMonster,
} from '../../reducers/monsters/monsters.selectors';
import {
  BattleSection,
  PageContainer,
  StartBattleButton,
} from './BattleOfMonsters.extended.styled';
import {
  monsterWins,
  selectRandomMonster,
} from '../../reducers/monsters/monsters.selectors.extended';
import { fetchBattleWins } from '../../reducers/monsters/monsters.actions.extended';
import { WinnerDisplay } from '../../components/winner-display/WinnerDisplay.extended';

const BattleOfMonsters = () => {
  const dispatch = useAppDispatch();

  const monsters = useSelector(selectMonsters);
  const randomMonster = useSelector(selectRandomMonster);
  const selectedMonster = useSelector(selectSelectedMonster);
  const winner = useSelector(monsterWins);

  useEffect(() => {
    dispatch(fetchMonstersData());
  }, []);

  const handleStartBattleClick = () => {
    // Fight!
    dispatch(
      fetchBattleWins({
        monster1Id: selectedMonster?.id,
        monster2Id: randomMonster?.id,
      }),
    );
  };

  return (
    <PageContainer>
      <Title>Battle of Monsters</Title>

      <MonstersList monsters={monsters} />

      {winner && <WinnerDisplay text={winner?.winner.name} />}

      <BattleSection>
        <MonsterBattleCard
          title={selectedMonster?.name || 'Player'}
          monster={selectedMonster}></MonsterBattleCard>
        <StartBattleButton
          data-testid="start-battle-button"
          disabled={selectedMonster === null}
          onClick={handleStartBattleClick}>
          Start Battle
        </StartBattleButton>
        <MonsterBattleCard
          title="Computer"
          monster={randomMonster}></MonsterBattleCard>
      </BattleSection>
    </PageContainer>
  );
};

export { BattleOfMonsters };
