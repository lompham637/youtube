export const UploadIcon = ({ width = '2.6rem', height = '2.6rem', className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 24 24">
            <title>video-plus-outline</title>
            <path d="M15 8V16H5V8H15M16 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.55 18 17 17.55 17 17V13.5L21 17.5V6.5L17 10.5V7C17 6.45 16.55 6 16 6M13 13H11V15H9V13H7V11H9V9H11V11H13V13Z" />
        </svg>
    );
};

export const SearchIcon = ({ width = '2rem', height = '2rem', className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width={width} height={height} className={className}>
        <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
    </svg>
);

export const MenuIcon = ({ width = '2.4rem', height = '2.4rem', className }) => {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            clipRule="evenodd"
            fillRule="evenodd"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z"
                fillRule="nonzero"
            />
        </svg>
    );
};

export const MicroIcon = ({ width = '2.4rem', height = '2.4rem', className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 24 24">
            <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
        </svg>
    );
};

export const NotificationIcon = ({ width = '2.6rem', height = '2.6rem', className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 24 24">
            <title>bell-outline</title>
            <path d="M10 21H14C14 22.1 13.1 23 12 23S10 22.1 10 21M21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2S14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19M17 11C17 8.2 14.8 6 12 6S7 8.2 7 11V18H17V11Z" />
        </svg>
    );
};

export const HistoryIcon = ({ width = '2rem', height = '2rem', className }) => {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="m3.503 6.726c1.765-2.836 4.911-4.726 8.495-4.726 5.518 0 9.997 4.48 9.997 9.997 0 5.519-4.479 9.999-9.997 9.999-5.245 0-9.553-4.048-9.966-9.188-.024-.302.189-.811.749-.811.391 0 .715.3.747.69.351 4.369 4.012 7.809 8.47 7.809 4.69 0 8.497-3.808 8.497-8.499 0-4.689-3.807-8.497-8.497-8.497-3.037 0-5.704 1.597-7.206 3.995l1.991.005c.414 0 .75.336.75.75s-.336.75-.75.75h-4.033c-.414 0-.75-.336-.75-.75v-4.049c0-.414.336-.75.75-.75s.75.335.75.75zm7.487.021.007 5.563c0 .288.165.55.424.675l3.978 1.928c.373.18.821.024 1.001-.349s.024-.821-.349-1.001l-3.555-1.725s-.006-5.093-.006-5.093c0-.414-.337-.749-.75-.749-.414 0-.75.337-.75.751z"
                fill-rule="nonzero"
            />
        </svg>
    );
};
