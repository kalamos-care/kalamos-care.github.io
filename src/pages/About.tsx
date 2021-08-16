import { FC } from 'react';

import { Grid, Typography } from '@material-ui/core/';

import PageTitle from '../components/PageTitle';

const copy = [
    {
        header: "Sexual health is awkward. It doesn't have to be.",
        body: [
            { paragraph: "It can be awkward to talk to someone you don't know about sex. Hell, it can be hard to talk to someone you do know about sex. And it's even harder when you're concerned something might be wrong." },
            { paragraph: "As a result, sexual healthcare is too often reactionary and fear-based. Kalamos is all about turning that on its head." },
            { paragraph: "We know there's a better way. We know that patients are capable of being active participants in their care. We know by creating convenient services, we enable more people to get the care they need." },
        ],
    },
    {
        header: "That burning sensation to solve a problem",
        body: [
            { paragraph: "I still remember my first time getting tested, or rather the roller coaster of emotions before and after." },
            { paragraph: "I woke up and it burned to pee, like badly. Half-convinced this was the end, I reached out to an older friend for advice. He calmed me down and took me to the clinic in the Castro. Yes, even in the heart of SF, I was still woefully under-educated about sexual health and afraid to go to the clinic alone." },
            { paragraph: `Everyone at the clinic was kind, reassuring, and cheerful. Where I grew up, you didn't really talk about these things. 30 minutes later, the doctor had taken my samples, treated me proactively, and reassured me that everything was going to be just fine. "Come back in a week to check in," he said with a smile, handing me a heap of condoms.` },
            { paragraph: "What I really got out of the experience was knowledge, security, and confidence. The dissolution of stigma around sexual health and the reassurance that I would be okay was incredibly powerful." },
            { paragraph: "That experience stuck with me because of how lucky I was, and that’s ultimately why I created Kalamos. Everyone deserved affirmative access to sexual wellness." },
        ],
    },
    {
        header: "Who we are",
        body: [
            { paragraph: "We are iterative, connective, research-aligned and practical." },
            { paragraph: "We are a small, but growing group of queer folk who want better care modeled around our needs and our convenience." }
        ],
    },
];

export const About: FC = () => {
    return (
        <Grid container>
            <PageTitle title="About Us" />
            <Grid item xs={12}>
                {copy.map((section) => (
                    <Grid>
                        <Typography
                            variant="h4"
                            color="textPrimary"
                            gutterBottom
                        >
                            {section.header}
                        </Typography>
                        <Grid>
                            {section.body.map((i) => (
                                <Typography variant="body1" paragraph>
                                    {i.paragraph}
                                </Typography>
                            ))}
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default About;