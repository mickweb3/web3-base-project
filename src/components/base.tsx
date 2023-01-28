import styled from 'wired-styled-px2vw';
import { IWiredProps } from '@/components-typing';
import { baseCss, flexCss, settleCss, spacingCss, textCss } from './css';
import React, { FC } from 'react';

export const WiredNav = styled.nav<IWiredProps<HTMLBaseElement> & FlexCss>`
    ${(props) => flexCss(props)}
`;

export const WiredNavLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: var(--gray-color-1);
    display: flex;
    align-items: center;
    text-overflow: ellipsis;
    word-break: keep-all;
    white-space: nowrap;

    &.active,
    &:hover {
        font-weight: 600;
        color: var(--primary-color);
    }

    .wired-link-icon {
        width: 18px;
        margin-right: 10px;
    }
    .wired-link-icon-avatar {
        border-radius: 50%;
    }
`;

export const WiredIcon = styled.img<IWiredProps<HTMLImageElement> & BaseCss>`
    ${(props) => spacingCss(props)}
    width: ${(props) => settleCss(props.size, 'auto')};
    height: ${(props) => settleCss(props.size, 'auto')};
`;

export const WiredImage = styled.img<IWiredProps<HTMLImageElement> & BaseCss>`
    ${(props) => baseCss(props)}
    display: block;
    object-fit: contain;
    flex-shrink: 0;
    min-width: ${(props) => settleCss(props.width, 'auto')};
    min-height: ${(props) => settleCss(props.height, 'auto')};
`;

export const WiredAvatar = styled.img<IWiredProps<HTMLImageElement> & BaseCss>`
    ${(props) => spacingCss(props)}
    border-radius: 50%;
    width: ${(props) => settleCss(props.size, 18)};
`;

export const WiredText = styled.span<IWiredProps<HTMLSpanElement> & TextCss>`
    ${(props) => textCss(props)}
    line-height: 100%;
    display: inline-block;
`;

export const WiredBox = styled.div<IWiredProps<HTMLDivElement> & BaseCss>`
    ${(props) => baseCss(props)}
`;

export const WiredFlexBox = styled.div<IWiredProps<HTMLDivElement> & FlexCss>`
    ${(props) => flexCss(props)}
`;

export const WiredLayout = styled.div<IWiredProps<HTMLBaseElement> & BaseCss>`
    ${(props) => spacingCss(props)}
`;

export const WiredPage = styled.main<IWiredProps<HTMLBaseElement> & BaseCss>`
    ${(props) => spacingCss(props)}
`;

export const WiredParagraph = styled.p<IWiredProps<HTMLParagraphElement> & TextCss & { rows?: number }>`
    ${(props) => textCss(props)}
    word-break: break-all;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: ${(props) => `${props.rows ?? 4}`}; /* number of lines to show */
    line-clamp: ${(props) => `${props.rows ?? 4}`};
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const WiredHeading = styled(
    ({
        headingType = 'h1',
        children,
        ...rest
    }: IWiredProps<HTMLHeadingElement> & TextCss & { headingType?: HeadingType }) => {
        return React.createElement(headingType, rest as any, children);
    },
)`
    ${(props) => textCss(props)}
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const WiredLink = styled.a<IWiredProps<HTMLAnchorElement> & TextCss & FlexCss>`
    ${(props) => textCss(props)}
    ${(props) => flexCss(props)}
`;

export const WiredHotspotArea = styled.a<IWiredProps<HTMLAnchorElement> & BaseCss>`
    ${(props) => spacingCss(props)}
    position: absolute;
`;

export const WiredList = styled.ul<IWiredProps<HTMLUListElement>>`
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: ${(props) => settleCss(props.height, 'auto')};
    max-height: ${(props) => settleCss(props.height, 'auto')};
`;

export const WiredListItem = styled.li`
    display: flex;
    align-items: center;
`;

export const WiredButtonGroup = styled.div<IWiredProps<HTMLDivElement> & BaseCss>`
    ${(props) => spacingCss(props)}
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
