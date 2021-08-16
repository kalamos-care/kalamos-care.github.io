import React, { FC } from 'react'

import Typography from '@material-ui/core/Typography';

interface Props {
    title: string,
};

const PageTitle: FC<Props> = ({ title }) => (
    <Typography gutterBottom variant="h3">
        {title}
    </Typography>
);

export default PageTitle;