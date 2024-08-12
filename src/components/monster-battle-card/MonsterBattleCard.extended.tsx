import React from 'react';

import { Monster } from '../../models/interfaces/monster.interface';
import {
  BattleMonsterCard,
  BattleMonsterTitle,
  Image,
  ProgressBar,
  BattleMonsterText,
} from './MonsterBattleCard.extended.styled';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ monster, title }) => {
  return (
    <BattleMonsterCard>
      <Image src={monster?.imageUrl} />
      <BattleMonsterTitle>{title!}</BattleMonsterTitle>
      <BattleMonsterText>HP</BattleMonsterText>
      <ProgressBar variant="determinate" value={monster?.hp} />
      <BattleMonsterText>Attack</BattleMonsterText>
      <ProgressBar variant="determinate" value={monster?.attack} />
      <BattleMonsterText>Defense</BattleMonsterText>
      <ProgressBar variant="determinate" value={monster?.defense} />
      <BattleMonsterText>Speed</BattleMonsterText>
      <ProgressBar variant="determinate" value={monster?.speed} />
    </BattleMonsterCard>
  );
};

export { MonsterBattleCard };
