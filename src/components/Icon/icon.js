export const UploadIcon = ({ width = '2.4rem', height = '2.4rem', className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 24 24">
            <g>
                <path d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"></path>
            </g>
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
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            classNames={className}
            viewBox="0 0 24 24"
        >
            <g>
                <path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"></path>
            </g>
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
            <g>
                <path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z"></path>
            </g>
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
                fillRule="nonzero"
            />
        </svg>
    );
};

export const AccountIcon = ({ width = '2.4rem', height = '2.4rem', className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            classNames={className}
            viewBox="0 0 24 24"
        >
            <g>
                <path d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"></path>
            </g>
        </svg>
    );
};

export const StudioIcon = ({ width = '2.4rem', height = '2.4rem', className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            classNames={className}
            viewBox="0 0 24 24"
        >
            <g enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
                <path d="M10,9.35,15,12l-5,2.65ZM12,3a.73.73,0,0,0-.31.06L4.3,7.28A.79.79,0,0,0,4,7.8v8.4a.79.79,0,0,0,.3.52l7.39,4.22a.83.83,0,0,0,.62,0l7.39-4.22a.79.79,0,0,0,.3-.52V7.8a.79.79,0,0,0-.3-.52L12.31,3.06A.73.73,0,0,0,12,3m0-1a1.6,1.6,0,0,1,.8.19l7.4,4.22A1.77,1.77,0,0,1,21,7.8v8.4a1.77,1.77,0,0,1-.8,1.39l-7.4,4.22a1.78,1.78,0,0,1-1.6,0L3.8,17.59A1.77,1.77,0,0,1,3,16.2V7.8a1.77,1.77,0,0,1,.8-1.39l7.4-4.22A1.6,1.6,0,0,1,12,2Zm0,4a.42.42,0,0,0-.17,0l-4.7,2.8A.59.59,0,0,0,7,9.19V14.8a.65.65,0,0,0,.13.37l4.7,2.8A.42.42,0,0,0,12,18a.34.34,0,0,0,.17,0l4.7-2.81A.56.56,0,0,0,17,14.8V9.19a.62.62,0,0,0-.13-.37L12.17,6A.34.34,0,0,0,12,6m0-1a1.44,1.44,0,0,1,.69.17L17.39,8A1.46,1.46,0,0,1,18,9.19V14.8A1.46,1.46,0,0,1,17.39,16l-4.7,2.81A1.44,1.44,0,0,1,12,19a1.4,1.4,0,0,1-.68-.17L6.62,16A1.47,1.47,0,0,1,6,14.8V9.19A1.47,1.47,0,0,1,6.62,8l4.7-2.8A1.4,1.4,0,0,1,12,5Z"></path>
            </g>
        </svg>
    );
};

export const ChangeAccountIcon = ({ width = '2.4rem', height = '2.4rem', className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            classNames={className}
            viewBox="0 0 24 24"
        >
            <g>
                <path d="M4,20h14v1H3V6h1V20z M6,3v15h15V3H6z M8.02,17c0.36-2.13,1.93-4.1,5.48-4.1s5.12,1.97,5.48,4.1H8.02z M11,8.5 C11,7.12,12.12,6,13.5,6S16,7.12,16,8.5c0,1.38-1.12,2.5-2.5,2.5S11,9.88,11,8.5z M14.21,11.93C15.8,11.6,17,10.19,17,8.5 C17,6.57,15.43,5,13.5,5S10,6.57,10,8.5c0,1.69,1.2,3.1,2.79,3.43c-3.48,0.26-5.4,2.42-5.78,5.07H7V4h13v13h-0.01 C19.61,14.35,17.68,12.19,14.21,11.93z"></path>
            </g>
        </svg>
    );
};

export const LogoutIcon = ({ width = '2.4rem', height = '2.4rem', className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            classNames={className}
            viewBox="0 0 24 24"
        >
            <g>
                <path d="M20,3v18H8v-1h11V4H8V3H20z M11.1,15.1l0.7,0.7l4.4-4.4l-4.4-4.4l-0.7,0.7l3.1,3.1H3v1h11.3L11.1,15.1z"></path>
            </g>
        </svg>
    );
};

export const CoinIcon = ({ width = '2.4rem', height = '2.4rem', className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            classNames={className}
            viewBox="0 0 24 24"
        >
            <g>
                <path d="M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2L12,2z M12.45,10.95c-0.67-0.22-1.18-0.47-1.52-0.72c-0.34-0.26-0.52-0.57-0.52-0.95c0-0.41,0.15-0.73,0.44-0.98 c0.29-0.25,0.71-0.37,1.24-0.37c0.55,0,1.23,0.15,1.53,0.44C13.8,8.53,13.93,8.75,14,9h2c-0.07-0.46-0.26-0.88-0.49-1.27 c-0.33-0.55-0.78-0.98-1.37-1.28C13.79,6.27,13.41,6.17,13,6.09V5h-2v1.12c-0.31,0.07-0.62,0.16-0.9,0.29 C9.5,6.7,9.04,7.08,8.72,7.58C8.4,8.07,8.24,8.63,8.24,9.26c0,1.21,0.6,2.18,1.8,2.9c0.44,0.26,1.04,0.53,1.79,0.8 c0.75,0.27,1.27,0.53,1.56,0.77c0.29,0.24,0.43,0.59,0.43,1.05c0,0.42-0.14,0.74-0.43,0.97c-0.29,0.23-0.69,0.35-1.21,0.35 c-1.05,0-1.92-0.37-2.18-1.1H8c0.08,0.42,0.22,0.81,0.44,1.16c0.35,0.57,0.86,1.02,1.52,1.35c0.33,0.16,0.67,0.28,1.04,0.37V19h2 v-1.05c0.79-0.11,1.45-0.38,1.97-0.81c0.69-0.57,1.03-1.37,1.03-2.38c0-0.91-0.28-1.67-0.85-2.28S13.69,11.36,12.45,10.95z"></path>
            </g>
        </svg>
    );
};

export const DataPersonIcon = ({ width = '2.4rem', height = '2.4rem', className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            classNames={className}
            viewBox="0 0 24 24"
        >
            <g>
                <path d="M12,3.06l7,3.21v4.84c0,1.3-0.25,2.6-0.75,3.86c-0.15,0.37-0.33,0.76-0.55,1.17c-0.15,0.27-0.31,0.54-0.48,0.81 c-1.32,2.01-3.17,3.42-5.23,3.98c-2.06-0.56-3.91-1.97-5.23-3.98c-0.17-0.27-0.33-0.54-0.48-0.81c-0.22-0.41-0.4-0.79-0.55-1.17 C5.25,13.71,5,12.41,5,11.11V6.27L12,3.06 M12,1.96L4,5.63v5.49c0,1.47,0.3,2.9,0.81,4.22c0.17,0.44,0.37,0.86,0.6,1.28 c0.16,0.3,0.34,0.6,0.52,0.88c1.42,2.17,3.52,3.82,5.95,4.44L12,21.96l0.12-0.03c2.43-0.61,4.53-2.26,5.95-4.43 c0.19-0.29,0.36-0.58,0.52-0.88c0.22-0.41,0.43-0.84,0.6-1.28C19.7,14.01,20,12.58,20,11.11V5.63L12,1.96L12,1.96z M13.08,12.11 c-0.32-0.06-0.64-0.11-0.96-0.12C13.72,11.92,15,10.62,15,9c0-1.66-1.34-3-3-3S9,7.34,9,9c0,1.62,1.28,2.92,2.88,2.99 c-0.32,0.01-0.64,0.06-0.96,0.12h0C8.64,12.58,7,14.62,7,17h10C17,14.62,15.36,12.58,13.08,12.11z M10,9c0-1.1,0.9-2,2-2s2,0.9,2,2 s-0.9,2-2,2S10,10.1,10,9z M11.12,13.09c0.37-0.08,0.64-0.11,0.88-0.11s0.51,0.03,0.88,0.11c1.48,0.3,2.63,1.46,3,2.91H8.12 C8.49,14.55,9.64,13.39,11.12,13.09z"></path>
            </g>
        </svg>
    );
};

export const DisplayIcon = ({ width = '2.4rem', height = '2.4rem', className }) => {
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} classNames={className} viewBox="0 0 24 24">
        <g class="style-scope yt-icon">
            <path
                d="M12 22C10.93 22 9.86998 21.83 8.83998 21.48L7.41998 21.01L8.83998 20.54C12.53 19.31 15 15.88 15 12C15 8.12 12.53 4.69 8.83998 3.47L7.41998 2.99L8.83998 2.52C9.86998 2.17 10.93 2 12 2C17.51 2 22 6.49 22 12C22 17.51 17.51 22 12 22ZM10.58 20.89C11.05 20.96 11.53 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3C11.53 3 11.05 3.04 10.58 3.11C13.88 4.81 16 8.21 16 12C16 15.79 13.88 19.19 10.58 20.89Z"
                class="style-scope yt-icon"
            ></path>
        </g>
    </svg>;
};

export const LanguageIcon = ({ width = '2.4rem', height = '2.4rem', className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            classNames={className}
            viewBox="0 0 24 24"
        >
            <g>
                <path d="M12.26,16.18l-2.93-2.87c-0.8,0.86-1.64,1.71-2.48,2.54L4.6,18.1L3.9,17.4l2.25-2.25c0.84-0.84,1.68-1.69,2.48-2.55 c-1.18-1.23-2.17-2.64-2.9-4.18L5.73,8.4h1.14c0.65,1.26,1.47,2.43,2.44,3.45c1.59-1.81,2.89-3.69,3.43-5.7H2.08v-1h6.65V3h1v2.15 h6.78v1h-2.73c-0.54,2.32-2.01,4.42-3.77,6.42l2.63,2.58C12.51,15.5,12.39,15.82,12.26,16.18z M21.51,21.01h-0.95l-1.12-3.04h-4.91 l-1.11,3.04h-0.96l4.09-10.81h0.87L21.51,21.01z M19.15,17.2l-2.17-5.89l-2.17,5.89H19.15z"></path>
            </g>
        </svg>
    );
};

export const LimitResIcon = ({ width = '2.4rem', height = '2.4rem', className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            classNames={className}
            viewBox="0 0 24 24"
        >
            <g>
                <path d="M12 20.95Q8.975 20.075 6.987 17.312Q5 14.55 5 11.1V5.7L12 3.075L19 5.7V11.35Q18.775 11.275 18.5 11.2Q18.225 11.125 18 11.075V6.375L12 4.15L6 6.375V11.1Q6 12.575 6.438 13.938Q6.875 15.3 7.625 16.438Q8.375 17.575 9.413 18.425Q10.45 19.275 11.625 19.725L11.675 19.7Q11.8 20 11.975 20.288Q12.15 20.575 12.375 20.825Q12.275 20.85 12.188 20.888Q12.1 20.925 12 20.95ZM17 17Q17.625 17 18.062 16.562Q18.5 16.125 18.5 15.5Q18.5 14.875 18.062 14.438Q17.625 14 17 14Q16.375 14 15.938 14.438Q15.5 14.875 15.5 15.5Q15.5 16.125 15.938 16.562Q16.375 17 17 17ZM17 20Q17.8 20 18.438 19.65Q19.075 19.3 19.5 18.7Q18.925 18.35 18.3 18.175Q17.675 18 17 18Q16.325 18 15.7 18.175Q15.075 18.35 14.5 18.7Q14.925 19.3 15.562 19.65Q16.2 20 17 20ZM17 21Q15.325 21 14.163 19.837Q13 18.675 13 17Q13 15.325 14.163 14.162Q15.325 13 17 13Q18.675 13 19.837 14.162Q21 15.325 21 17Q21 18.675 19.837 19.837Q18.675 21 17 21ZM12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Z"></path>
            </g>
        </svg>
    );
};

export const LocationIcon = ({ width = '2.4rem', height = '2.4rem', className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            classNames={className}
            viewBox="0 0 24 24"
        >
            <g>
                <path d="M11.99,1.98C6.46,1.98,1.98,6.47,1.98,12s4.48,10.02,10.01,10.02c5.54,0,10.03-4.49,10.03-10.02S17.53,1.98,11.99,1.98z M8.86,14.5c-0.16-0.82-0.25-1.65-0.25-2.5c0-0.87,0.09-1.72,0.26-2.55h6.27c0.17,0.83,0.26,1.68,0.26,2.55 c0,0.85-0.09,1.68-0.25,2.5H8.86z M14.89,15.5c-0.54,1.89-1.52,3.64-2.89,5.15c-1.37-1.5-2.35-3.25-2.89-5.15H14.89z M9.12,8.45 c0.54-1.87,1.52-3.61,2.88-5.1c1.36,1.49,2.34,3.22,2.88,5.1H9.12z M16.15,9.45h4.5c0.24,0.81,0.37,1.66,0.37,2.55 c0,0.87-0.13,1.71-0.36,2.5h-4.51c0.15-0.82,0.24-1.65,0.24-2.5C16.39,11.13,16.3,10.28,16.15,9.45z M20.29,8.45h-4.38 c-0.53-1.97-1.47-3.81-2.83-5.4C16.33,3.45,19.04,5.56,20.29,8.45z M10.92,3.05c-1.35,1.59-2.3,3.43-2.83,5.4H3.71 C4.95,5.55,7.67,3.44,10.92,3.05z M3.35,9.45h4.5C7.7,10.28,7.61,11.13,7.61,12c0,0.85,0.09,1.68,0.24,2.5H3.34 c-0.23-0.79-0.36-1.63-0.36-2.5C2.98,11.11,3.11,10.26,3.35,9.45z M3.69,15.5h4.39c0.52,1.99,1.48,3.85,2.84,5.45 C7.65,20.56,4.92,18.42,3.69,15.5z M13.09,20.95c1.36-1.6,2.32-3.46,2.84-5.45h4.39C19.08,18.42,16.35,20.55,13.09,20.95z"></path>
            </g>
        </svg>
    );
};

export const KeyboardIcon = ({ width = '2.4rem', height = '2.4rem', className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            classNames={className}
            viewBox="0 0 24 24"
        >
            <g>
                <path d="M16,16H8v-2h8V16z M16,11h-2v2h2V11z M19,11h-2v2h2V11z M13,11h-2v2h2V11z M10,11H8v2h2V11z M7,11H5v2h2V11z M16,8h-2v2h2V8 z M19,8h-2v2h2V8z M13,8h-2v2h2V8z M10,8H8v2h2V8z M7,8H5v2h2V8z M22,5v14H2V5H22z M21,6H3v12h18V6z"></path>
            </g>
        </svg>
    );
};

export const SettingIcon = ({ width = '2.4rem', height = '2.4rem', className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            classNames={className}
            viewBox="0 0 24 24"
        >
            <g>
                <path d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4 S14.21,8,12,8L12,8z M13.22,3l0.55,2.2l0.13,0.51l0.5,0.18c0.61,0.23,1.19,0.56,1.72,0.98l0.4,0.32l0.5-0.14l2.17-0.62l1.22,2.11 l-1.63,1.59l-0.37,0.36l0.08,0.51c0.05,0.32,0.08,0.64,0.08,0.98s-0.03,0.66-0.08,0.98l-0.08,0.51l0.37,0.36l1.63,1.59l-1.22,2.11 l-2.17-0.62l-0.5-0.14l-0.4,0.32c-0.53,0.43-1.11,0.76-1.72,0.98l-0.5,0.18l-0.13,0.51L13.22,21h-2.44l-0.55-2.2l-0.13-0.51 l-0.5-0.18C9,17.88,8.42,17.55,7.88,17.12l-0.4-0.32l-0.5,0.14l-2.17,0.62L3.6,15.44l1.63-1.59l0.37-0.36l-0.08-0.51 C5.47,12.66,5.44,12.33,5.44,12s0.03-0.66,0.08-0.98l0.08-0.51l-0.37-0.36L3.6,8.56l1.22-2.11l2.17,0.62l0.5,0.14l0.4-0.32 C8.42,6.45,9,6.12,9.61,5.9l0.5-0.18l0.13-0.51L10.78,3H13.22 M14,2h-4L9.26,4.96c-0.73,0.27-1.4,0.66-2,1.14L4.34,5.27l-2,3.46 l2.19,2.13C4.47,11.23,4.44,11.61,4.44,12s0.03,0.77,0.09,1.14l-2.19,2.13l2,3.46l2.92-0.83c0.6,0.48,1.27,0.87,2,1.14L10,22h4 l0.74-2.96c0.73-0.27,1.4-0.66,2-1.14l2.92,0.83l2-3.46l-2.19-2.13c0.06-0.37,0.09-0.75,0.09-1.14s-0.03-0.77-0.09-1.14l2.19-2.13 l-2-3.46L16.74,6.1c-0.6-0.48-1.27-0.87-2-1.14L14,2L14,2z"></path>
            </g>
        </svg>
    );
};

export const SupportIcon = ({ width = '2.4rem', height = '2.4rem', className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            classNames={className}
            viewBox="0 0 24 24"
        >
            <g>
                <path d="M15.36,9.96c0,1.09-0.67,1.67-1.31,2.24c-0.53,0.47-1.03,0.9-1.16,1.6L12.85,14h-1.75l0.03-0.28 c0.14-1.17,0.8-1.76,1.47-2.27c0.52-0.4,1.01-0.77,1.01-1.49c0-0.51-0.23-0.97-0.63-1.29c-0.4-0.31-0.92-0.42-1.42-0.29 c-0.59,0.15-1.05,0.67-1.19,1.34L10.32,10H8.57l0.06-0.42c0.2-1.4,1.15-2.53,2.42-2.87c1.05-0.29,2.14-0.08,2.98,0.57 C14.88,7.92,15.36,8.9,15.36,9.96z M12,18c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1S11.45,18,12,18z M12,3c-4.96,0-9,4.04-9,9 s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"></path>
            </g>
        </svg>
    );
};

export const RequestIcon = ({ width = '2.4rem', height = '2.4rem', className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            classNames={className}
            viewBox="0 0 24 24"
        >
            <g>
                <path d="M13,14h-2v-2h2V14z M13,5h-2v6h2V5z M19,3H5v16.59l3.29-3.29L8.59,16H9h10V3 M20,2v15H9l-5,5V2H20L20,2z"></path>
            </g>
        </svg>
    );
};
