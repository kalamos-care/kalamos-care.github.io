import { FC } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Container, Grid, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
        justifyContent: "center",
    },
}));

const Hero: FC = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="sm" className={classes.heroContent}>
            <Grid>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Building Stronger Communities
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Something short and leading about the collection below—its contents, the creator, etc.
                    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                    entirely.
                </Typography>
            </Grid>
            <Grid container spacing={2} className={classes.heroButtons}>
                <Grid item>
                    <Button variant="contained" color="primary">
                        Main call to action
                    </Button>
                </Grid>
                {/*
                <Grid item>
                    <Button variant="outlined" color="primary">
                        Secondary action
                    </Button>
                </Grid>
                */}
            </Grid>
        </Container>
    );
};

export default Hero;