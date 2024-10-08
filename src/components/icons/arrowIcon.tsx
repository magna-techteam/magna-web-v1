interface ArrowIconProps {
    height: number;
    width: number;
}

export const ArrowIcon = (props: ArrowIconProps) => {
  return (
    <svg
      height={props.height}
      width={props.width}
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_512_2358)">
        <path
          d="M15.492 4.77896C15.464 4.70996 15.423 4.64697 15.372 4.58997L11.883 0.981965C11.666 0.757965 11.314 0.757965 11.097 0.981965C10.879 1.20696 10.879 1.56896 11.097 1.79896L13.637 4.42196H1.021C0.713996 4.42196 0.464996 4.68096 0.464996 4.99796C0.464996 5.31396 0.713996 5.57296 1.021 5.57296H13.637L11.097 8.20196C10.879 8.42696 10.879 8.78896 11.097 9.01296C11.205 9.12796 11.348 9.18596 11.49 9.18596C11.632 9.18596 11.775 9.12796 11.883 9.01296L15.372 5.40596C15.423 5.35496 15.464 5.29096 15.492 5.22196C15.52 5.15297 15.535 5.07796 15.535 4.99796C15.535 4.92297 15.52 4.84796 15.492 4.77896Z"
          fill="white"
        />  
      </g>
      <defs>
        <clipPath id="clip0_512_2358">
          <rect width="16" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
