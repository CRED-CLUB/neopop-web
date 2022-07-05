import styled, { css } from 'styled-components';
import { Row } from '@components/Helpers';

export const RootPage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: #0d0d0d;
    padding: 100px 160px;
    .sans-serif {
        font-family: 'Gilroy', 'Trebuchet MS', Helvetica, sans-serif;
    }
    .serif {
        font-family: 'Cirka', 'Times New Roman', Times, serif;
    }
    @media screen and (max-width: 768px) {
        padding: 50px;
    }
`;

export const HeroSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    .subheading {
        font-size: 28px;
        line-height: 44px;
        letter-spacing: 0px;
        font-weight: 400;
        max-width: 550px;
    }
    .foundation {
        letter-spacing: 7px;
        font-size: 14px;
        font-weight: 600;
    }
    .description {
        line-height: 40px;
        font-size: 26px;
        max-width: 820px;
    }
    @media screen and (max-width: 364px) {
        .subheading {
            font-size: 18px;
            line-height: 30px;
        }
        .foundation {
            font-size: 13px;
        }
        .description {
            font-size: 20px; 
            line-height: 34px;
        }
    }
    @media screen and (min-width: 365px) and (max-width: 768px) {
        .subheading {
            font-size: 22px;
            line-height: 32px;
        }
        .description {
            font-size: 26px; 
            line-height: 38px;
        }
    }
`;

export const Img = styled.img<{width: string, mWidth?: string}>`
    width: ${(props) => props.width ? props.width : 'auto'};
    ${(props) => props.mWidth ? 
        css`
            @media screen and (max-width: 768px) {
                width: ${props.mWidth};
            }
        ` 
    : css``};
`;

export const Heading = styled(Row)`
    .heading {
        font-size: 70px;
        line-height: 48px;
    }
    .details {
        max-width: 300px;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        height: 130px;
        .heading {
            font-size: 46px;
            line-height: 0;
        }
        .details {
            font-size: 15px;
        }
    }
`;