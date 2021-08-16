import { FC } from 'react';

import { Grid } from '@material-ui/core';

import PromoCard from './PromoCard';

const cards = [
    {
      title: "Finding Care",
      subtitle: "Search for clinics based on your zipcode",
      url: "https://search.kalamos.care",
    },
    {
      title: "Adherence Help",
      subtitle: "Tools to help patients take their medication daily",
      url: "",
    },
    {
      title: "Sex Store",
      subtitle: "Support your local clinic by buying lubes and condoms",
      url: "",
    },
    {
      title: "Provider App",
      subtitle: "Remote Patient Monitoring web app",
      url: "https://app.kala.care",
    },
  ];

const PromoCardArray: FC = () => {

    return (
        <Grid container spacing={4}>
            {cards.map((card) => (
                <Grid item xs={12} sm={6}>
                    <PromoCard title={card.title} subtitle={card.subtitle} url={card.url} key={card.title} />
                </Grid>
            ))}
        </Grid>
    );
};

export default PromoCardArray;