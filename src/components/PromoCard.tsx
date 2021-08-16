import { FC } from 'react';

import { Typography, Card, CardHeader, CardContent, CardActions, Button } from '@material-ui/core';

interface Props {
    title: string,
    subtitle: string,
    url: string,
};

const PromoCard: FC<Props> = ({ title, subtitle, url }) => (
    <Card>
        <CardHeader
            title={title}
        />
        <CardContent>
            <Typography variant="h6">
                {subtitle}
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant="outlined" color="primary" href={url}>
                Learn More
            </Button>
        </CardActions>
    </Card>
);

export default PromoCard;