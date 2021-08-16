import { FC } from 'react';

import { Grid } from '@material-ui/core/';

import PageTitle from '../components/PageTitle';

export const FAQ: FC = () => {

    return (
        <Grid container>
            <PageTitle title="Frequently Asked Questions" />
        </Grid>
    );
};

export default FAQ;