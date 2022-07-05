import React from 'react';

import { RootPage, HeroSection, Img, Heading } from './styles';
import { HorizontalDivider, HorizontalSpacer } from '@components/Helpers';
import Typography from '@components/Typography';
import { colorGuide } from '@primitives/colors';
import { fontNameSpaces } from '@primitives/typography';
import { GlobalFonts } from '@components/Typography/TypographySystem/global';

import TypographyAsset from './assets/typography.png';
import ColorsAsset from './assets/colors.png';
import AnimationAsset from './assets/animations.png';
import Title from './assets/title.png';
import Seperator from './assets/seperator.png';

const Details = [
    {
        heading: 'color',
        details:
            'the vibrancy of neoPOP demanded a framework where color could cross barriers of screen and glass, to speak directly to the user.',
        asset: ColorsAsset,
    },
    {
        heading: 'typography',
        details:
            'with scalability at its heart, our typography system bring consistency & cohesiveness to the many experiences within CRED.',
        asset: TypographyAsset,
    },
    {
        heading: 'layout',
        details:
            'a consistent arrangement guides the user experience. to ensure uniformity of design, our components are crafted to be reusable and easily pluggable.',
        asset: AnimationAsset,
    },
];

const IntroPage = () => (
    <RootPage>
        <HeroSection>
            <GlobalFonts />
            
            <Typography {...fontNameSpaces.tc12b} color={colorGuide.darkComponents.font.bodyText}>
                meet
            </Typography>
            <HorizontalSpacer n={14} />
            <div>
                <Img src={Title} width='276px' mWidth='200px' />
            </div>
            <HorizontalSpacer n={24} />
            <Typography
                {...fontNameSpaces.tsh20b}
                color={colorGuide.darkComponents.font.bodyText}
                className='subheading serif'
            >
                behind every masterpiece there exists a framework. here is ours. now open-source. 
                <br /> because art belongs to everyone.
            </Typography>
            <HorizontalSpacer n={24} />
            <Img src={Seperator} width='96px' />
            <HorizontalSpacer n={40} />
            
            <Typography 
                {...fontNameSpaces.tc12b} 
                color={colorGuide.darkComponents.font.bodyText} 
                className='sans-serif foundation'
            >
                FOUNDATIONS
            </Typography>
            <HorizontalSpacer n={10} />
            <Typography
                {...fontNameSpaces.th22sb}
                color={colorGuide.darkComponents.font.heading}
                className='sans-serif description'
            >
                written by our developers with the ever-burning desire to 
                redefine UI conventions & bring the art of neopop to life.
            </Typography>
            <HorizontalSpacer n={40} />
        </HeroSection>
        
        {Details.map((data, i) => (
            <React.Fragment key={i}>
                <HorizontalDivider />
                <HorizontalSpacer n={10} />
                <Typography {...fontNameSpaces.tsh20b} color={colorGuide.darkComponents.font.bodyText}>
                    {`${i + 1}/${Details.length}`} 
                </Typography>
                <HorizontalSpacer n={7} />
                
                <Heading className='v-justify'>
                    <Typography
                        {...fontNameSpaces.tsh34b}
                        color={colorGuide.darkComponents.font.subHeading}
                        className='serif heading'
                    >
                        {data.heading}
                    </Typography>
                    <HorizontalSpacer n={10} />
                    <Typography
                        {...fontNameSpaces.th18sb}
                        color={colorGuide.darkComponents.font.bodyText}
                        className='sans-serif details'
                    >
                        {data.details}
                    </Typography>
                    <HorizontalSpacer n={5} />
                </Heading>
                
                <HorizontalSpacer n={15} />
                <div>
                    <Img src={data.asset} width='100%'/>
                </div>
                <HorizontalSpacer n={25} />
            </React.Fragment>
        ))}
    </RootPage>
);

export default IntroPage;
