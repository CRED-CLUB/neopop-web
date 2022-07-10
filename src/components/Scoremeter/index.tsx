import React from 'react';
import Typography from '@components/Typography';
import { colorGuide, fontNameSpaces } from '@primitives';
import { Legend, MeterContainer, MeterSVG, MeterWrapper, ScoreContainer } from './styles';
import { DEFAULT_MODE, DEFAULT_TYPE, LOWER_THRESHOLD, ScoremeterProps } from './types';
import { Row } from '@components/Helpers';

const getScoremeterReading = (reading: number, lowerLimit: number, upperLimit: number) =>
    ((75 - 0) / (upperLimit - lowerLimit)) * (reading - upperLimit) + 75;
const getDotRotateDegree = (reading: number, lowerLimit: number, upperLimit: number) =>
    2.7 * (((reading - lowerLimit) * 100) / (upperLimit - lowerLimit)) + 47;

const ScoreMeter = (props: ScoremeterProps) => {
    const {
        reading,
        oldReading,
        colorMode = DEFAULT_MODE,
        type = DEFAULT_TYPE,
        colorConfig = colorGuide[colorMode == 'light' ? 'lightComponents' : 'darkComponents']
            .scoremeter,
        scoreDesc,
        showIndicators,
        lowerLimit = 300,
        upperLimit = 900,
        showLegends = true,
    } = props;

    const sanitizedReading = reading < 0 ? LOWER_THRESHOLD : reading;
    const sanitizedOldReading = oldReading
        ? oldReading < 0
            ? LOWER_THRESHOLD
            : oldReading
        : LOWER_THRESHOLD;
    const [score, setScore] = React.useState(sanitizedReading);
    const [oldScore] = React.useState(sanitizedOldReading);
    const [animate, setAnimate] = React.useState(false);
    const [scoreUpdate, setScoreUpdate] = React.useState(false);

    const differenceScore = sanitizedOldReading
        ? sanitizedReading - sanitizedOldReading
        : sanitizedReading;
    const differential = differenceScore < 0 ? -1 : 1;

    React.useEffect(() => {
        if (sanitizedOldReading && sanitizedReading !== sanitizedOldReading) {
            setScore(sanitizedOldReading);
            setAnimate((prev) => !prev);
        }
    }, []);

    React.useEffect(() => {
        if (score !== sanitizedReading) {
            const timerId = setTimeout(() => {
                setScoreUpdate(true);
            }, 500);
            return () => clearTimeout(timerId);
        }
    }, [animate]);

    React.useEffect(() => {
        if (Math.floor(sanitizedReading) !== Math.floor(score)) {
            const timerId = setTimeout(() => {
                setScore((prevScore) => prevScore + differential);
                setScoreUpdate((prev) => !prev);
            }, 20);
            return () => clearTimeout(timerId);
        }
    }, [scoreUpdate]);

    const scoreReading = getScoremeterReading(score, lowerLimit, upperLimit);
    const dotRotateDegree = getDotRotateDegree(score, lowerLimit, upperLimit);

    return (
        <Row>
            <MeterContainer>
                <MeterWrapper colorConfig={colorConfig} type={type} showIndicators={showIndicators}>
                    <div
                        className="dot"
                        style={{ transform: `rotateZ(${dotRotateDegree}deg) translateY(80px)` }}
                    />
                    <div className="meter">
                        <MeterSVG height="140" width="140" viewBox="0 0 20 20">
                            <circle r="10" cx="10" cy="10" fill="none" />
                            {score > oldScore ? (
                                <circle
                                    r="5"
                                    cx="10"
                                    cy="10"
                                    fill="none"
                                    stroke={colorConfig?.meterStrokeColor[type ?? 'excellent']}
                                    strokeWidth="10"
                                    strokeDasharray={`${(scoreReading * 31.42) / 100} 31.42`}
                                />
                            ) : (
                                <circle
                                    r="5"
                                    cx="10"
                                    cy="10"
                                    fill="none"
                                    stroke={colorConfig?.meterStrokeColor[type ?? 'excellent']}
                                    strokeWidth="10"
                                    strokeDasharray={`${
                                        ((scoreReading + 0.75) * 31.42) / 100
                                    } 31.42`}
                                />
                            )}
                        </MeterSVG>
                    </div>

                    {/* Inside Meter */}
                    <ScoreContainer
                        colorConfig={colorConfig}
                        type={type}
                        showIndicators={showIndicators}
                    >
                        <div className="score">
                            <Typography {...fontNameSpaces.th28eb} style={{ color: 'inherit' }}>
                                {sanitizedOldReading ? score : sanitizedReading}
                            </Typography>
                            {scoreDesc ? (
                                <Typography
                                    {...fontNameSpaces.tc8b}
                                    color={colorConfig?.meterStrokeColor[type]}
                                    style={{ marginTop: '5px' }}
                                >
                                    {scoreDesc}
                                </Typography>
                            ) : null}
                            {showIndicators ? (
                                <div>
                                    <svg width="15" height="24" viewBox="0 0 14 10">
                                        <path
                                            d="M7.368 0L0 10h14z"
                                            fill={
                                                score > oldScore
                                                    ? colorConfig?.indicatorColors?.increment
                                                    : colorConfig?.indicatorColors?.neutral
                                            }
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                    <svg width="15" height="24" viewBox="0 0 14 10">
                                        <path
                                            d="M7.368 10L0 0h14z"
                                            fill={
                                                score < oldScore
                                                    ? colorConfig?.indicatorColors?.decrement
                                                    : colorConfig?.indicatorColors?.neutral
                                            }
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                    </ScoreContainer>
                </MeterWrapper>

                {/* Legends */}
                {showLegends ? (
                    <>
                        <Legend>
                            <div className="dot">&middot;</div>
                            <Typography {...fontNameSpaces.tb14sb} color="#4b4f52">
                                {lowerLimit}
                            </Typography>
                        </Legend>
                        <Legend right>
                            <div className="dot">&middot;</div>
                            <Typography {...fontNameSpaces.tb14sb} color="#4b4f52">
                                {upperLimit}
                            </Typography>
                        </Legend>
                    </>
                ) : null}
            </MeterContainer>
        </Row>
    );
};

export default ScoreMeter;
