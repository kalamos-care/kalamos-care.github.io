import { FC } from 'react';

import { Grid } from '@material-ui/core/';

import PageTitle from '../components/PageTitle';

export const Blog: FC = () => {
    return (
        <Grid container>
            <PageTitle title="Blog" />
        </Grid>
    );
};

export default Blog;