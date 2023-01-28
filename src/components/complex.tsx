import styled, { css } from 'wired-styled-px2vw';
import { IWiredLpToken, IWiredProps, IWiredSearchBar, IWiredToken } from '@/components-typing';
import { baseCss, iconCss, tokenCss, settleCss } from './css';
import classNames from 'classnames';
import { Input } from 'antd';
import { FC, Fragment } from 'react';
import { formatAddress } from '@/utils';
import { CopyBtn, SvgProps } from './svg';
import { WiredFlexBox, WiredLink, WiredText } from './base';
import React from 'react';

export const WiredCard = styled.div<IWiredProps<HTMLDivElement>>`
    ${(props) => css`
        width: ${`${props.width ?? 360}px`};
        height: 100%;
        position: relative;
        border-radius: 6px;
        background: #ffffff;
        border: 1px solid #b5a5ff;
        padding: 24px 20px 30px 20px;
        flex: 1;

        &:before {
            content: '';
            position: absolute;
            left: -5px;
            bottom: -5px;
            width: 100%;
            height: 100%;
            border-radius: 6px;
            background: #f3efff;
            z-index: -5;
        }

        &:after {
            content: '';
            position: absolute;
            left: -10px;
            bottom: -10px;
            width: 100%;
            height: 100%;
            border-radius: 6px;
            background: #4536af;
            z-index: -10;
        }
    `}
`;

export const WiredToken = styled.i<IWiredToken & BaseCss>`
    ${(props) => baseCss(props)}
    ${(props) => tokenCss(props.token, props.type, props.size)}
    width: ${(props) => `${props.size ?? 18}px`};

    &.token0 {
        margin-bottom: -6px;
        margin-right: -3px;
        position: relative;
        z-index: 10;
    }

    &.token1 {
        margin-top: -6px;
        margin-left: -3px;
        position: relative;
        z-index: 1;
    }
`;

export const WiredLpToken = styled((props: IWiredLpToken) => {
    return (
        <div className={classNames('lp-token', props.className)}>
            <WiredToken className="token0" size={18} type={props.type} token={props.token0} />
            <WiredToken className="token1" size={18} type={props.type} token={props.token1} />
        </div>
    );
})<IWiredLpToken>`
    display: flex;
    align-items: center;
`;

export const WiredSearchBar: FC<IWiredSearchBar> = styled(
    React.forwardRef<unknown, IWiredSearchBar>((props, ref: any) => (
        <div className={classNames('wired-search-bar', props.className)}>
            <Input {...props} bordered={false} placeholder={props.placeholder || 'Search Address'} ref={ref} />
        </div>
    )),
)<IWiredSearchBar>`
    ${(props) => css`
        ${(props) => baseCss(props)}
        position: relative;
        width: 100%;

        &:before {
            content: '';
            position: absolute;

            z-index: 10;
            left: ${settleCss(props.$iconLeft, 22)};
            top: 50%;
            transform: translateY(-50%);
        }

        .ant-input {
            height: 48px;
            background: #f8f8fd;
            border-radius: 8px;
            font-style: normal;
            font-weight: ${settleCss(props.fontWeight, 400)};
            font-size: ${settleCss(props.fontSize, 16)};
            text-indent: ${settleCss(props.$textIdent, 54)};
            padding: 0;
            margin: 0;

            &.ant-input-status-error {
                border: 1px solid #ff4d4f;
            }

            &::placeholder {
                color: ${props.$placeholderColor ?? '#626264'};
            }
        }

        .ant-input-suffix {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 18px;

            .ant-input-clear-icon {
            }
        }

        ${props.wiredtheme === 'pure' &&
        css`
            &:before {
                background: #4536af;
            }
            .ant-input {
                border-radius: 0;
                border-bottom: 1px solid #4536af;
                background: transparent;

                &::placeholder {
                    color: #4536af;
                }
            }
        `}
    `}
`;
export const WiredAccount = styled((props: SvgProps & { name: string; address?: string }) => {
    const { name, address, onClick, ...rest } = props;
    return (
        <WiredFlexBox className={classNames('wired-account', rest.className)} align="center">
            {name && (
                <WiredText color="#090914" fontSize={16} fontWeight={600} marginRight={4}>
                    {name}
                </WiredText>
            )}
            {address && (
                <Fragment>
                    <WiredText
                        color={name ? '#626264' : '#090914'}
                        fontSize={14}
                        fontWeight={name ? 400 : 600}
                        marginRight={4}
                    >
                        ({formatAddress(address)})
                    </WiredText>
                    <WiredLink onClick={onClick}>
                        <CopyBtn {...rest} />
                    </WiredLink>
                </Fragment>
            )}
        </WiredFlexBox>
    );
})``;
