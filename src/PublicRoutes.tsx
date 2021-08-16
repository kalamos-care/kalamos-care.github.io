import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { useHistory } from 'react-router';

import { makeStyles } from '@material-ui/core/styles';

import { Box, Container } from '@material-ui/core';

import Header from './layout/Header';
import Footer from './layout/Footer';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { FAQ } from './pages/FAQ';
import { Docs } from './pages/Docs';
import { Privacy } from './pages/Privacy';
import { TermsOfUse } from './pages/TermsOfUse';

const useStyles = makeStyles((theme) => ({
  public: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  main: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    paddingTop: theme.spacing(4),
  },
  footer: {
    display: 'flex',
    textAlign: 'center',
    position: 'relative',
    bottom: '0',
    backgroundColor: '#f4effc',
    marginTop: '2rem',
    paddingBottom: '2rem',
  },
}));

export const PublicRoutes: FC = () => {
  //const history = useHistory();
  const classes = useStyles();

  return (
    <Box className={classes.public}>
      <header className={classes.header}>
        <Header />
      </header>
      <main className={classes.main}>
        <Container maxWidth="md">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/company/about-us" component={About} />
            <Route path="/company/blog" component={Blog} />
            <Route path="/resources/faq" component={FAQ} />
            <Route path="/resources/api-docs" component={Docs} />
            <Route path='/legal/privacy-policy' component={Privacy} />
            <Route path='/legal/terms-of-use' component={TermsOfUse} />
            {/*<Route path="/clinic/:id" component={Clinic} />*/}
          </Switch>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </Box>
  );
};
