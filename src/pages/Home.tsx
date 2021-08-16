import { FC } from 'react';

import { Container, Divider } from '@material-ui/core/';

import Hero from '../components/Hero';
import PromoCardArray from '../components/PromoCardArray';

/*
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

}));
*/

export const Home: FC = () => {
  // const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Hero />
      <PromoCardArray />
    </Container>
  );
};