import React from 'react';

type ErrorProps = {
  color?: string;
  viewBox?: string;
};

const ErrorText: React.FC<ErrorProps> = ({
  color = 'white',
  viewBox = '0 0 175 38',
}) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 30.3691V37.0837H27.016V30.8437H8.728V30.3691H1ZM33.2031 30.3691V37.0837H40.9791V30.3691H33.2031ZM49.9369 30.3691L54.5631 37.0837H62.9631L58.2841 30.3691H49.9369ZM68.5 30.3691V37.0837H76.276V30.3691H68.5ZM85.2338 30.3691L89.86 37.0837H98.26L93.5809 30.3691H85.2338ZM104.833 30.3691C105.436 31.2094 106.115 31.9915 106.869 32.7157C108.533 34.2837 110.485 35.4997 112.725 36.3637C114.997 37.2277 117.461 37.6597 120.117 37.6597C122.741 37.6597 125.157 37.2277 127.365 36.3637C129.605 35.4997 131.541 34.2997 133.173 32.7637C133.956 32.0258 134.658 31.2276 135.278 30.3691H123.939C122.76 30.8135 121.47 31.0357 120.069 31.0357C118.668 31.0357 117.364 30.8135 116.157 30.3691H104.833ZM144.297 30.3691V37.0837H152.073V30.3691H144.297ZM161.031 30.3691L165.657 37.0837H174.057L169.378 30.3691H161.031Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 14.2627V27H7.728V22.0683H23.328V16.0203H7.728V14.2627H0ZM32.2031 14.2627V27H39.9791V26.7243H46.7471C46.8697 26.7243 46.9915 26.7235 47.1127 26.7219L47.3043 27H55.6327L54.4573 25.3132L54.5231 25.2843C56.6991 24.3243 58.3791 22.9483 59.5631 21.1563C60.7471 19.3323 61.3391 17.1723 61.3391 14.6763C61.3391 14.5374 61.3373 14.3995 61.3338 14.2627H53.457C53.4637 14.3982 53.4671 14.5361 53.4671 14.6763C53.4671 16.5003 52.8751 17.9403 51.6911 18.9963C50.5071 20.0203 48.7151 20.5323 46.3151 20.5323H39.9791V14.2627H32.2031ZM67.5 14.2627V27H75.276V26.7243H82.044C82.1665 26.7243 82.2884 26.7235 82.4095 26.7219L82.6011 27H90.9296L89.7541 25.3132L89.82 25.2843C91.996 24.3243 93.676 22.9483 94.86 21.1563C96.044 19.3323 96.636 17.1723 96.636 14.6763C96.636 14.5374 96.6342 14.3995 96.6306 14.2627H88.7539C88.7606 14.3982 88.764 14.5361 88.764 14.6763C88.764 16.5003 88.172 17.9403 86.988 18.9963C85.804 20.0203 84.012 20.5323 81.612 20.5323H75.276V14.2627H67.5ZM101.361 14.2627C100.91 15.84 100.685 17.5138 100.685 19.2843C100.685 21.7803 101.133 24.0843 102.029 26.1963C102.149 26.4687 102.274 26.7366 102.406 27H111.475C110.574 26.0528 109.858 24.9369 109.325 23.6523C108.813 22.3083 108.557 20.8523 108.557 19.2843C108.557 17.6843 108.813 16.2283 109.325 14.9163C109.417 14.6934 109.516 14.4755 109.62 14.2627H101.361ZM128.484 14.2627C128.584 14.4755 128.678 14.6934 128.765 14.9163C129.309 16.2283 129.581 17.6843 129.581 19.2843C129.581 20.8843 129.309 22.3403 128.765 23.6523C128.264 24.9369 127.547 26.0528 126.617 27H135.707C135.831 26.7521 135.948 26.5002 136.061 26.2443C136.989 24.1003 137.453 21.7803 137.453 19.2843C137.453 17.4987 137.221 15.8248 136.758 14.2627H128.484ZM143.297 14.2627V27H151.073V26.7243H157.841C157.963 26.7243 158.085 26.7235 158.206 26.7219L158.398 27H166.726L165.551 25.3132L165.617 25.2843C167.793 24.3243 169.473 22.9483 170.657 21.1563C171.841 19.3323 172.433 17.1723 172.433 14.6763C172.433 14.5374 172.431 14.3995 172.428 14.2627H164.551C164.557 14.3982 164.561 14.5361 164.561 14.6763C164.561 16.5003 163.969 17.9403 162.785 18.9963C161.601 20.0203 159.809 20.5323 157.409 20.5323H151.073V14.2627H143.297Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 11.2483H8.728V7.7242H26.392V1.4842H1V11.2483ZM173.233 11.2483C172.968 9.72634 172.443 8.35964 171.657 7.1482C170.473 5.3242 168.793 3.9322 166.617 2.9722C164.441 1.9802 161.849 1.4842 158.841 1.4842H144.297V11.2483H152.073V7.8202H158.409C160.809 7.8202 162.601 8.3322 163.785 9.3562C164.389 9.87863 164.839 10.5093 165.135 11.2483H173.233ZM137.006 11.2483C136.082 9.18817 134.804 7.38947 133.173 5.8522C131.541 4.2842 129.605 3.0682 127.365 2.2042C125.157 1.3402 122.725 0.908203 120.069 0.908203C117.445 0.908203 115.013 1.3402 112.773 2.2042C110.533 3.0682 108.581 4.2842 106.917 5.8522C105.285 7.38947 104.008 9.18817 103.084 11.2483H111.91C112.121 10.991 112.345 10.7443 112.581 10.5082C113.541 9.5482 114.645 8.8122 115.893 8.3002C117.173 7.7882 118.565 7.5322 120.069 7.5322C121.573 7.5322 122.965 7.7882 124.245 8.3002C125.525 8.8122 126.629 9.5482 127.557 10.5082C127.793 10.7443 128.015 10.991 128.224 11.2483H137.006ZM97.4357 11.2483C97.1716 9.72634 96.6464 8.35964 95.86 7.1482C94.676 5.3242 92.996 3.9322 90.82 2.9722C88.644 1.9802 86.052 1.4842 83.044 1.4842H68.5V11.2483H76.276V7.8202H82.612C85.012 7.8202 86.804 8.3322 87.988 9.3562C88.5921 9.87863 89.042 10.5093 89.3379 11.2483H97.4357ZM62.1388 11.2483C61.8747 9.72634 61.3495 8.35964 60.5631 7.1482C59.3791 5.3242 57.6991 3.9322 55.5231 2.9722C53.3471 1.9802 50.7551 1.4842 47.7471 1.4842H33.2031V11.2483H40.9791V7.8202H47.3151C49.7151 7.8202 51.5071 8.3322 52.6911 9.3562C53.2952 9.87863 53.7452 10.5093 54.041 11.2483H62.1388Z"
        fill={color}
      />
    </svg>
  );
};

export default ErrorText;