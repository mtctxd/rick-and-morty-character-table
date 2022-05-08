import React from 'react';

type Props = {
  status: 'Alive' | 'Dead' | 'unknown';
};

const StatusIcon: React.FC<Props> = ({ status }) => {
  switch (status) {
    case 'Alive':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9 1.8C5.02355 1.8 1.8 5.02355 1.8 9C1.8 12.9764 5.02355 16.2 9 16.2C12.9764 16.2 16.2 12.9764 16.2 9C16.2 5.02355 12.9764 1.8 9 1.8ZM0 9C0 4.02944 4.02944 0 9 0C13.9705 0 18 4.02944 18 9C18 13.9705 13.9705 18 9 18C4.02944 18 0 13.9705 0 9Z"
            fill="#03A99F"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.336 6.56356C12.6875 6.91503 12.6875 7.48488 12.336 7.83635L8.73603 11.4364C8.38462 11.7878 7.81473 11.7878 7.46326 11.4364L5.66326 9.63638C5.31179 9.28489 5.31179 8.71502 5.66326 8.36353C6.01473 8.01209 6.58458 8.01209 6.93605 8.36353L8.09966 9.52715L11.0633 6.56356C11.4148 6.21209 11.9846 6.21209 12.336 6.56356Z"
            fill="#03A99F"
          />
        </svg>
      );

    case 'Dead':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9 1.8C5.02355 1.8 1.8 5.02355 1.8 9C1.8 12.9764 5.02355 16.2 9 16.2C12.9764 16.2 16.2 12.9764 16.2 9C16.2 5.02355 12.9764 1.8 9 1.8ZM0 9C0 4.02944 4.02944 0 9 0C13.9705 0 18 4.02944 18 9C18 13.9705 13.9705 18 9 18C4.02944 18 0 13.9705 0 9Z"
            fill="#FF2626"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.00035 4.5C9.4974 4.5 9.90035 4.90295 9.90035 5.4V9C9.90035 9.49705 9.4974 9.9 9.00035 9.9C8.5033 9.9 8.10034 9.49705 8.10034 9V5.4C8.10034 4.90295 8.5033 4.5 9.00035 4.5Z"
            fill="#FF2626"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.10034 12.6C8.10034 12.103 8.5033 11.7 9.00035 11.7H9.00935C9.5064 11.7 9.90935 12.103 9.90935 12.6C9.90935 13.0971 9.5064 13.5 9.00935 13.5H9.00035C8.5033 13.5 8.10034 13.0971 8.10034 12.6Z"
            fill="#FF2626"
          />
        </svg>
      );
    default:
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18 9C18 13.9705 13.9705 18 9 18C4.02943 18 0 13.9705 0 9C0 4.02943 4.02943 0 9 0C13.9705 0 18 4.02943 18 9ZM9.14544 11.7896H8.71073C8.4046 11.7896 8.15581 12.0384 8.15581 12.3446V12.9448C8.15581 13.251 8.4046 13.4997 8.71073 13.4997H9.14544C9.45153 13.4997 9.70038 13.251 9.70038 12.9448V12.3446C9.70038 12.0375 9.45153 11.7896 9.14544 11.7896ZM6.88244 7.24319L6.08058 7.14331C5.90947 7.12203 5.79201 6.9611 5.82439 6.78908C5.9289 6.19993 6.22579 5.68939 6.71413 5.2584C7.28755 4.75249 8.03948 4.5 8.97176 4.5C9.95211 4.5 10.7328 4.75619 11.3117 5.26857C11.8916 5.78096 12.181 6.37751 12.181 7.05729C12.181 7.43372 12.0738 7.7898 11.8611 8.12552C11.6474 8.46219 11.1924 8.91907 10.4941 9.49716C10.1334 9.79677 9.90864 10.0372 9.8217 10.2195C9.76995 10.3258 9.73575 10.4821 9.71721 10.6884C9.69129 10.975 9.4527 11.1961 9.16416 11.1961H8.71095C8.39463 11.1961 8.14307 10.9335 8.15602 10.6181C8.17081 10.2499 8.23 9.88281 8.40019 9.5517C8.56666 9.22797 8.89869 8.86358 9.39816 8.45941C9.89667 8.05523 10.1954 7.79072 10.2925 7.66494C10.4423 7.46701 10.5172 7.24874 10.5172 7.01012C10.5172 6.67809 10.3849 6.39508 10.1186 6.15831C9.85221 5.92247 9.49338 5.80408 9.04293 5.80408C8.60827 5.80408 8.2448 5.92801 7.95254 6.17403C7.74628 6.34791 7.58535 6.58652 7.46975 6.88896C7.37818 7.1285 7.13679 7.27464 6.88244 7.24319Z"
            fill="#BAC6D8"
          />
        </svg>
      );
  }
};

export default StatusIcon;
