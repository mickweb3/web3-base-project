import { IWiredProps } from '@/components-typing';

export type SvgProps = IWiredProps<HTMLOrSVGElement> & BaseCss;

export function ModalCloseBtn({ color = '#4536AF' }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <rect width="24" height="24" fill={color} rx="6"></rect>
            <path
                fill="#fff"
                fillRule="evenodd"
                d="M6.293 6.293a1 1 0 011.414 0L12 10.586l4.293-4.293a1 1 0 111.414 1.414L13.414 12l4.293 4.293a1 1 0 01-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 12 6.293 7.707a1 1 0 010-1.414z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}

export function CopyBtn(props: SvgProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="none"
            viewBox="0 0 14 14"
            onClick={props.onClick}
        >
            <path
                fill={props.color || '#626264'}
                d="M9.21 1.167H3.315c-.542 0-.982.474-.982 1.06v7.424h.982V2.227H9.21v-1.06zm1.474 2.12H5.28c-.542 0-.982.476-.982 1.061v7.425c0 .585.44 1.06.982 1.06h5.404c.542 0 .982-.475.982-1.06V4.348c0-.585-.44-1.06-.982-1.06zM5.28 4.349h5.404v7.425H5.28V4.348z"
            ></path>
        </svg>
    );
}

export function EditBtn({ color = '#4536AF', onClick }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="11"
            fill="none"
            viewBox="0 0 10 11"
            onClick={onClick}
        >
            <path
                fill={color}
                fillRule="evenodd"
                d="M8.468 1.187a.639.639 0 00-.904 0l-.136.136c.009.493.41.895.903.904l.137-.136a.639.639 0 000-.904zM7.519 3.04a1.941 1.941 0 01-.903-.904L4.254 4.497c-.477.478-.676.679-.837.902a3.5 3.5 0 00-.372.657c-.085.197-.146.407-.247.8.394-.1.604-.162.8-.246a3.5 3.5 0 00.658-.372c.223-.161.424-.36.902-.838L7.519 3.04zM6.857.48a1.639 1.639 0 012.318 2.318l-3.31 3.31-.033.032c-.435.436-.695.696-.993.91a4.5 4.5 0 01-.844.478c-.336.145-.693.234-1.291.383l-.045.012-.427.106a.5.5 0 01-.607-.606l.107-.428.011-.044c.15-.598.239-.955.384-1.29a4.5 4.5 0 01.478-.846c.214-.297.474-.557.91-.993l.032-.032L6.857.48zM0 10.228a.5.5 0 01.5-.5h8.59a.5.5 0 010 1H.5a.5.5 0 01-.5-.5z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}

export function Search(props: SvgProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path
                fill={props.color}
                fillRule="evenodd"
                d="M14.857 7.429a7.429 7.429 0 10-7.428 7.428c1.84 0 3.531-.674 4.834-1.783l.308.309v.903L18.286 20 20 18.286l-5.714-5.715h-.903l-.309-.308a7.446 7.446 0 001.783-4.834zm-12.571 0a5.121 5.121 0 015.143-5.143 5.121 5.121 0 015.142 5.143A5.121 5.121 0 017.43 12.57 5.121 5.121 0 012.286 7.43z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}

export function TreeTriangle({ color = '#4536AF' }: SvgProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="10" fill="none" viewBox="0 0 8 10">
            <path
                fill={color}
                d="M6.814 4.178a1 1 0 010 1.644L2.069 9.109A1 1 0 01.5 8.287V1.713A1 1 0 012.07.891l4.744 3.287z"
            ></path>
        </svg>
    );
}

export function IconLink({ color = '#503E9D' }: any) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 15 15">
            <path
                fill="#503E9D"
                stroke={color}
                d="M11.564 9.05l-.203-.198 1.458-1.457h0l.009-.01c.809-.852 1.283-1.81 1.381-2.87.1-1.065-.206-2.004-.917-2.777l-.014-.016-.016-.014C12.49.997 11.55.691 10.485.791c-1.06.099-2.018.573-2.87 1.381h0l-.01.01-1.457 1.457-.198-.203 1.44-1.44C8.368 1.07 9.424.587 10.566.51c1.135-.077 2.091.261 2.903 1.021.76.812 1.098 1.768 1.021 2.903-.077 1.142-.559 2.198-1.484 3.174L11.564 9.05zM3.639 6.148L2.18 7.605h0l-.009.01c-.809.852-1.283 1.81-1.381 2.87-.1 1.066.206 2.004.917 2.777l.014.016.016.014c.773.711 1.712 1.017 2.777.917 1.06-.099 2.018-.573 2.87-1.381h0l.01-.01 1.457-1.457.198.203-1.44 1.44c-.977.926-2.033 1.408-3.175 1.485-1.135.077-2.091-.261-2.903-1.021C.772 12.656.434 11.7.511 10.565c.077-1.142.559-2.198 1.484-3.174L3.436 5.95l.203.198zm1.417 3.606l4.697-4.697.19.19-4.697 4.697-.19-.19z"
            ></path>
        </svg>
    );
}

export function IconSortArrow(props: SvgProps) {
    return (
        <svg
            {...(props as any)}
            width="11"
            height="10"
            viewBox="0 0 11 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1.44598 2.5L5.33929 6.36624L9.23259 2.5L10.4286 3.69609L5.33929 8.75L0.25 3.69609L1.44598 2.5Z"
                fill={props.color || '#182135'}
            />
        </svg>
    );
}

export function IconLight(props: SvgProps) {
    return (
        <svg
            {...(props as any)}
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_8_201796)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M33.4396 14.44C33.4396 18.2849 31.5362 21.6852 28.6203 23.75L26.5995 31.1598H17.4795L14.5131 23.0025C12.1383 20.9133 10.6396 17.8517 10.6396 14.44C10.6396 8.14399 15.7436 3.04004 22.0396 3.04004C28.3357 3.04004 33.4396 8.14399 33.4396 14.44ZM25.8393 34.2002C25.8393 36.2989 24.1379 38.0002 22.0393 38.0002C19.9406 38.0002 18.2393 36.2989 18.2393 34.2002H25.8393Z"
                    fill="#FCD144"
                />
                <path
                    d="M27.0083 4.02197C24.6926 1.81025 21.6422 0.674702 18.4434 0.830562C12.684 1.09775 7.9563 5.62509 7.45162 11.3622C7.17701 14.4274 8.10474 17.4185 10.0493 19.7786C12.0086 22.161 13.6118 26.3841 13.6118 29.197C13.6118 29.197 13.4559 30.2212 14.3836 30.2657H23.6387C24.6481 30.1915 24.4106 29.004 24.4106 29.004C24.4106 26.2579 25.9766 22.1536 27.9063 19.8528C29.6504 17.7747 30.6079 15.1325 30.6079 12.4235C30.6004 9.21728 29.3239 6.23369 27.0083 4.02197ZM18.3915 28.7145L16.6102 17.886H21.3973L19.6161 28.7145H18.3915ZM26.7114 18.8509C24.611 21.352 22.9559 25.6196 22.8594 28.7071H21.1821L23.0747 17.2329C23.1266 16.9954 23.0227 16.372 22.3102 16.3349H15.7047C15.0219 16.3571 14.8883 17.0028 14.9403 17.2329L16.8329 28.7071H15.1481C14.9922 25.5677 13.3297 21.3149 11.2442 18.7841C9.55943 16.7431 8.75787 14.1528 8.99537 11.4884C9.42584 6.53056 13.5227 2.61181 18.5102 2.37431C21.2934 2.24072 23.9282 3.22783 25.9321 5.14267C27.9434 7.05752 29.0493 9.64033 29.0493 12.4161C29.0567 14.7688 28.2254 17.0548 26.7114 18.8509Z"
                    fill="#231F20"
                />
                <path
                    d="M23.7283 32.2036H14.2729C13.8424 32.2036 13.501 32.5524 13.501 32.9755C13.501 33.406 13.8498 33.7474 14.2729 33.7474H14.9928C15.2971 35.6845 16.9744 37.1763 19.0006 37.1763C21.0268 37.1763 22.7041 35.6845 23.0084 33.7474H23.7283C24.1588 33.7474 24.5002 33.3985 24.5002 32.9755C24.5002 32.5524 24.1588 32.2036 23.7283 32.2036ZM19.0006 35.6325C17.8873 35.6325 16.9447 34.9052 16.6182 33.9032H21.383C21.0564 34.9052 20.1139 35.6325 19.0006 35.6325Z"
                    fill="#231F20"
                />
            </g>
            <defs>
                <clipPath id="clip0_8_201796">
                    <rect width="38" height="38" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}
