declare type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

declare interface Spacing {
    paddingLeft?: number | string;
    paddingRight?: number | string;
    paddingTop?: number | string;
    paddingBottom?: number | string;
    marginLeft?: number | string;
    marginRight?: number | string;
    marginTop?: number | string;
    marginBottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
    bottom?: number | string;
    // Transient props
    $paddingLeft?: number | string;
    $paddingRight?: number | string;
    $paddingTop?: number | string;
    $paddingBottom?: number | string;
    $marginLeft?: number | string;
    $marginRight?: number | string;
    $marginTop?: number | string;
    $marginBottom?: number | string;
    $left?: number | string;
    $right?: number | string;
    $top?: number | string;
    $bottom?: number | string;
}

declare interface Center {
    position?: string;
    marginLeft?: number | string;
    marginRight?: number | string;
    marginTop?: number | string;
    marginBottom?: number | string;
    // Transient props
    $marginLeft?: number | string;
    $marginRight?: number | string;
    $marginTop?: number | string;
    $marginBottom?: number | string;
}

declare interface BaseCss extends Spacing {
    width?: number | string;
    height?: number | string;
    flex?: number | string;
    background?: string;
    maxWidth?: number;
    maxHeight?: number;
    minHeight?: number;
    $maxWidth?: number;
    $minHeight?: number;
    $maxHeight?: number;
}

declare interface FlexCss extends BaseCss {
    column?: boolean;
    wrap?: string;
    justify?: string;
    align?: string;
}

declare interface TextCss extends BaseCss {
    color?: string;
    textAlign?: string;
    fontSize?: number;
    fontWeight?: number;
    // Transient props
    $color?: string;
    $textAlign?: string;
    $fontSize?: number;
    $fontWeight?: number;
    fontFamily?: string;
}

declare interface CursorCss {
    cursor?: string;
}
