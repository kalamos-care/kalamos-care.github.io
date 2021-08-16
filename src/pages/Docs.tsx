import { FC } from 'react';

import { Grid } from '@material-ui/core/';

import PageTitle from '../components/PageTitle';

export const Docs: FC = () => {

    return (
        <Grid container>
            <PageTitle title="API Docs" />
        </Grid>
    );
};

export default Docs;