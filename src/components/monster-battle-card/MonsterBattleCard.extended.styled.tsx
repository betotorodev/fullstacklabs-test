import styled from '@emotion/styled';
import {
  Card,
  LinearProgress,
  linearProgressClasses,
  Typography,
} from '@mui/material';
import { colors } from '../../constants/colors';

export const BattleMonsterCard = styled(Card, {
  shouldForwardProp: prop => prop !== 'centralized',
})<{ centralized?: boolean }>(({ centralized }) => ({
  padding: '13px 11px',
  width: 'calc(307px - 22px)',
  height: '415px',
  background: colors.white,
  boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
  borderRadius: '7px',
  display: centralized ? 'flex' : 'auto',
  alignItems: centralized ? 'center' : 'auto',
  justifyContent: centralized ? 'center' : 'auto',
}));

export const BattleMonsterTitle = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '22px',
  color: colors.black,
  marginTop: '14px',
  borderBottom: '1px solid rgba(0,0,0,0.10)',
}));

export const BattleMonsterText = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '12px',
  color: colors.black,
  marginTop: '11px',
}));

export const ProgressBar = styled(LinearProgress)(() => ({
  height: 8,
  borderRadius: 15,
  marginTop: '5px',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: colors.progressBarBackground,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 15,
    backgroundColor: colors.progressColor,
  },
}));

export const Image = styled.img(() => ({
  borderRadius: '7px',
  width: '283px',
  height: '178px',
  boxShadow: '0 4 4 rgba(0, 0, 0, 0.25)',
}));
