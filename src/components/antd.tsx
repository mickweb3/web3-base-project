import {
    Select,
    Button,
    Tag,
    Modal,
    Divider,
    Carousel,
    Tabs,
    Popover,
    Radio,
    Form,
    Slider,
    Tree,
    Input,
    Checkbox,
    List,
    TreeProps,
    Pagination,
    PaginationProps,
    PopoverProps,
    Spin,
    SpinProps,
    Dropdown,
    Menu,
} from 'antd';

import styled, { css, createGlobalStyle } from 'wired-styled-px2vw';
import {
    IAntButton,
    IAntModal,
    IAntSelect,
    IAntCheckboxGroup,
    ISlider,
    ITag,
    IAntPagination,
} from '@/components-typing';
import { flexCss, iconCss, settleCss, syntheticBgCss, textCss } from './css';
import { FC, Fragment } from 'react';
import { useAntdModalIndex } from 'antd-enhancer';
import { WiredBox } from './base';
import { ModalCloseBtn, TreeTriangle } from './svg';
import SelectArrow from '@/assets/images/dapp/arrow-select.svg';
import SelectArrowError from '@/assets/images/dapp/arrow-select-error.svg';
export const AntGlobalStyle = createGlobalStyle`
    /* spin */
    .ant-spin-nested-loading,
    .ant-spin-container {
        height: 100%;
        width: 100%;
    }

    /* popover */
    .ant-popover {
        background: transparent;
        padding: 0;
    }
    .ant-popover-arrow {
        display: none;
    }
    .ant-popover-inner-content {
        padding: 0;
    }
`;

export const AntForm = styled(Form)`
    width: 100%;
`;

export const AntFormItem = styled(Form.Item)`
    margin: 0;
    padding: 0;

    label {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 32px;
        color: var(--black-color);
    }
`;

export const AntInput = styled(Input)`
    border: 1px solid var(--primary-color);
    border-radius: 6px;
`;

export const AntTextArea = styled(Input.TextArea)`
    &.ant-input {
        border: 1px solid var(--primary-color);
        border-radius: 6px;
        resize: none;
    }
`;

export const AntList = styled(List)`
    &.ant-list {
        width: 100%;
    }
    .ant-list-item {
        ${(props) =>
            props.bordered === false &&
            css`
                border: none;
            `}
    }
`;

export const AntListItem = styled(List.Item)``;

export const AntListItemMeta = styled(List.Item.Meta)<Spacing>`
    ${(props) => flexCss(props)};
    width: 100%;

    .ant-list-item-meta-avatar {
        margin: 0;
        margin-right: 10px;
    }

    .ant-list-item-meta-content {
        width: auto;
    }

    .ant-list-item-meta-description {
        margin-top: 10px;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        color: #626264;
    }
`;

export const AntTag = styled(Tag)<ITag & { $fontColor?: string }>`
    ${(props) => css`
        width: auto;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        padding: 8px 12px;
        position: static;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 8px 8px 0;
        border: none;
        background: none;
        .anticon-close {
            margin-left: 8px;

            svg {
                width: 8px;
                height: 8px;
            }
        }

        ${props.$fontColor &&
        css`
            color: ${props.$fontColor};
            .anticon-close svg {
                color: ${props.$fontColor};
            }

            *,
            *:hover {
                color: ${props.$fontColor};
                .anticon-close svg {
                    color: ${props.$fontColor};
                }
            }
        `};

        ${props.wiredmode === 'clickable' &&
        css`
            cursor: pointer;
        `}

        ${props.color &&
        props.$fontColor &&
        css`
            border: none;
        `}
    `}
`;

export const AntCheckboxGroup = styled(Checkbox.Group)<IAntCheckboxGroup & { value: any }>`
    .ant-checkbox-wrapper {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
    }

    .ant-checkbox-wrapper + .ant-checkbox-wrapper {
        margin-left: 0;
    }

    ${(props) =>
        !props.shape &&
        css`
            .ant-checkbox-wrapper {
                min-height: 40px;
                padding: 0 22px;
                &:hover {
                    background: #f9f6ff;
                }

                > span:last-child {
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    color: #626264;
                    white-space: nowrap;
                    display: flex;
                    align-items: center;
                    padding: 0;
                    // margin-left: 8px;
                }

                &.single {
                    .ant-checkbox {
                        display: none;
                    }
                }
            }

            .ant-checkbox-wrapper-checked {
                position: relative;

                > * {
                    position: relative;
                    z-index: 10;
                }

                &:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: #f9f7ff;
                    z-index: 0;
                }

                > span:last-child {
                    font-weight: 600;
                    color: var(--primary-color);
                }
            }

            .ant-checkbox {
                top: auto;
                margin-right: 8px;
            }

            .ant-checkbox-checked .ant-checkbox-inner {
                background-color: var(--primary-color);
                border-color: var(--primary-color);
            }
        `}

    ${(props) =>
        props.shape === 'button' &&
        css`
            &.ant-checkbox-group {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                padding: 0 22px;
            }

            .ant-checkbox-wrapper {
                padding: 0;
                width: 132px;
                height: 36px;
                border: 1px solid #dadada;
                border-radius: 6px;
                margin-bottom: 20px;

                :nth-last-child(1),
                :nth-last-child(2) {
                    margin-bottom: 0;
                }

                > span:last-child {
                    padding: 0;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 140%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #626264;
                    width: 100%;
                    height: 100%;
                }
            }

            .ant-checkbox {
                display: none;
            }

            .ant-checkbox-wrapper-checked {
                background-color: var(--primary-color);
                border-color: var(--primary-color);
                > span:last-child {
                    color: #ffffff;
                }
            }
        `}
`;

export const AntCheckbox = styled(Checkbox)``;

export const AntSlider = styled(Slider)<ISlider>`
    &.ant-slider {
        margin: 0;
        display: flex;
        align-items: center;
        margin-bottom: 28px;

        .ant-slider-dot {
            background: #c1c3c7;
            border-color: #c1c3c7;
            width: 8px;
            height: 8px;
        }

        .ant-slider-dot-active {
            background: #ffffff;
            border-color: var(--primary-color);
        }

        .ant-slider-rail {
            background: rgba(98, 98, 100, 0.5);
            height: 1px;
        }

        .ant-slider-track {
            background-color: var(--primary-color);
            height: 3px;
        }

        .ant-slider-handle {
            border: solid 2px #ffffff;
            background-color: var(--primary-color);
            width: 12px;
            height: 12px;
            margin-top: 0;
        }

        .ant-slider-mark-text {
            top: 12px;
            color: #c1c3c7;
            font-weight: 300;
            font-size: 16px;
            line-height: 120%;
            display: flex;
            align-items: center;
            text-align: center;
        }
    }
`;

export const AntPopover: FC<PopoverProps> = styled(Popover)``;

export let AntModal: FC<IAntModal>;
{
    const InnerStyledComponent = styled(Modal)<IAntModal>`
        &.ant-modal {
            width: ${(props) => `${props.width ?? 552}px`} !important;
            border-radius: 6px;
            padding: 0;
            position: relative;

            .ant-modal-title {
                word-break: keep-all;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                padding-right: 40px;
            }

            &:before {
                content: '';
                position: absolute;
                left: -5px;
                bottom: -5px;
                width: 100%;
                height: 100%;
                border-radius: 6px;
            }

            .ant-modal-content {
                border-radius: 6px;
                overflow: hidden;
            }

            .ant-modal-header {
                border: none;
                padding: 30px 42px;
            }

            .ant-modal-title {
                font-style: normal;
                font-weight: 700;
                font-size: 24px;
                line-height: 140%;
                letter-spacing: 0.02em;
            }

            .ant-modal-body {
                padding: 0 42px 54px 42px;
            }

            .ant-modal-close-x {
                width: auto;
                height: 34px;
                box-sizing: content-box;
                line-height: 0;
                padding: 30px 42px;
                display: flex;
                align-items: center;

                img {
                    width: 24px;
                }
            }

            ${(props) =>
                !props.wiredtheme &&
                css`
                    &:before {
                        background: var(--primary-color);
                    }

                    .ant-modal-title {
                        color: var(--black-color);
                    }
                `}

            ${(props) =>
                props.wiredtheme === 'pink' &&
                css`
                    &:before {
                        background: var(--pink-color);
                    }

                    .ant-modal-title {
                        color: var(--pink-color);
                    }

                    .ant-modal-close-x {
                        svg {
                            rect {
                                fill: var(--pink-color);
                            }
                        }
                    }
                `}
        }
    `;
    AntModal = (props: IAntModal) => {
        const { marker } = useAntdModalIndex(props.zIndexRoot ?? 1, props.visible);

        return (
            <InnerStyledComponent {...props} closeIcon={<ModalCloseBtn />}>
                <WiredBox ref={marker} />
                {props.children}
            </InnerStyledComponent>
        );
    };
}

export const AntButton: FC<IAntButton> = styled(Button)<IAntButton>`
    &.ant-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: auto;
        border-radius: 6px;
        border: none;
        letter-spacing: 0.02em;
        width: auto !important;
        padding: 0 8px !important;
        min-width: ${(props) => settleCss(props.width, '100%')};

        * {
            letter-spacing: 0.02em;
        }

        ${(props) =>
            (!props.wiredtheme || props.wiredtheme === 'primary') &&
            css`
                ${textCss(props, { color: props.theme.SYSTEM.white })};
                background: ${props.theme.SYSTEM.primary};

                &:hover {
                    filter: brightness(120%);
                    background: ${props.theme.SYSTEM.primary};
                    color: ${props.theme.SYSTEM.white};
                }
            `}

        ${(props) =>
            props.wiredtheme === 'pure' &&
            css`
                ${textCss(props, { color: props.theme.SYSTEM.primary })};
                background: ${settleCss(props.background, 'transparent')};
                border: ${props.theme.SYSTEM.primary} 1px solid;

                &:hover {
                    background: ${props.theme.SYSTEM.primary};
                    color: ${props.theme.SYSTEM.white};
                }
            `}

        ${(props) =>
            (props.wiredtheme === 'gradient' || props.wiredtheme === 'secondary') &&
            css`
                ${textCss(props, { color: props.theme.SYSTEM.primary })};
                position: relative;
                > span {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;

                    * {
                        cursor: pointer;
                    }

                    &:hover {
                        background: ${props.theme.SYSTEM.primary};
                        color: ${props.theme.SYSTEM.white};
                        border-radius: 4px;

                        &:before,
                        &:after {
                            display: none;
                        }
                    }
                }
            `}

        ${(props) =>
            props.wiredtheme === 'selector' &&
            css`
                ${textCss(props, { color: 'var(--primary-color)' })};
                background: transparent;
                border-bottom: 1px solid var(--primary-color);
                justify-content: flex-start;
                padding: 16px 24px 16px 8px;
                border-radius: 0;
                position: relative;

                &:hover {
                    filter: none;
                    background: transparent;
                    color: var(--primary-color);
                }

                &:before {
                    content: '';
                    ${iconCss(SelectArrow, 12)}
                    position: absolute;
                    margin: auto 8px auto auto;
                    transition: all 0.3s;
                    opacity: 1;
                    transform-origin: center;
                }

                &.ant-popover-open {
                    &: before {
                        transform: rotate(-90deg);
                    }
                }

                &.error {
                    color: ${props.theme.SYSTEM.error};
                    border-bottom-color: ${props.theme.SYSTEM.error};

                    &:before {
                        ${iconCss(SelectArrowError, 12)}
                    }

                    * {
                        color: ${props.theme.SYSTEM.error};
                        border-bottom-color: ${props.theme.SYSTEM.error};
                    }
                }
            `}
    }
`;

export let AntSelect: FC<IAntSelect>;
{
    const InnerGlobalStyleComponent = createGlobalStyle<{
        fontSize: number;
        fontcolor: string;
    }>`
       ${({ fontSize = 14 }) => css`
           .ant-select-cover {
               box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
               border-radius: 6px;
               background: #ffffff;
               .ant-select-item {
                   min-width: 158px;
                   height: 40px;
               }

               .ant-select-item-option-selected,
               .ant-select-item-option-active {
                   color: var(--primary-color);
                   background: #f9f7ff;
               }
               .ant-select-item-option-content {
                   font-size: 15px;
                   font-weight: 400;
                   color: var(--gray-color-1);
                   display: flex;
                   align-items: center;
               }
               .ant-select-item-option-selected,
               .ant-select-item-option-active {
                   .ant-select-item-option-content {
                       color: var(--primary-color);
                       font-weight: 600;
                       font-size: 16px;
                   }
               }
           }
       `}
    `;
    const InnerStyledComponent: FC<IAntSelect> = styled(Select)`
        ${(props: IAntSelect) => css`
            &.ant-select {
                position: relative;
                display: flex;
                align-items: center;

                .ant-select-selection-item,
                .ant-select-selector {
                    padding: 0;
                    display: flex;
                    align-items: center;
                    color: var(--primary-color);
                    font-weight: 600;
                    font-size: 16px;
                    font-size: ${`${props.fontSize}px`};
                }

                .ant-select-selection-search,
                .ant-select-arrow {
                    display: none;
                }

                &:after {
                    content: '';
                    display: inline-block;
                    margin-left: 4px;
                    width: 10px;
                    height: 10px;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-image: url(${SelectArrow});
                    background-color: transparent;
                    background-size: contain;
                    flex-shrink: 0;
                }
            }
        `}
    `;
    AntSelect = (props) => {
        return (
            <Fragment>
                <InnerStyledComponent {...props} dropdownClassName="ant-select-cover" />
                <InnerGlobalStyleComponent fontSize={props.fontSize} fontcolor={props.fontcolor} />
            </Fragment>
        );
    };
}

export const AntDropdown = styled(Dropdown)``;

export const AntMenu = styled(Menu)`
    &.ant-dropdown-menu {
        padding: 4px;
        width: 152px;
        .ant-dropdown-menu-item {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 16px;
            color: #626264;
            height: 40px;
            &:hover {
                background: #f9f7ff;
                border-radius: 4px;
                color: var(--primary-color);
                font-weight: 600;
            }
        }
    }
`;

export const AntTabs = styled(Tabs)`
    &.ant-tabs {
        .ant-tabs-tab-btn {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: var(--black-color);
            padding: 6px;
        }
        .ant-tabs-tab-active {
            .ant-tabs-tab-btn {
                // font-weight: 600;
            }
        }
        .ant-tabs-ink-bar {
            height: 6px;
            background: var(--primary-color);
        }
    }
`;

export const AntCarousel = styled(Carousel)`
    width: 100%;

    .slick-dots {
        bottom: -5%;

        > li {
            > button {
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background: rgba(69, 54, 175, 0.3);
            }

            &.slick-active {
                > button {
                    background: var(--primary-color);
                }
            }
        }
    }
`;

export const AntDivider = styled(Divider)`
    border-left: 1px solid rgba(80, 62, 157, 0.32);
`;

export const AntSpin = styled(Spin)<SpinProps>``;

export const AntRatioGroup = styled(Radio.Group)`
    background: #f1f1fc;
    border-radius: 8px;
    padding: 6px 8px;

    .ant-radio-button-wrapper {
        border: none;
        background: transparent;
        height: auto;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        color: var(--gray-color-1);
    }
    .ant-radio-button-wrapper-checked {
        background: var(--primary-color);
        border-radius: 4px;
        color: var(--white-color);
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
    }
`;

export const AntRatioButton = styled(Radio.Button)``;
