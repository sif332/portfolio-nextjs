interface Props {
  size?: number;
  color?: string;
}

export default function MenuIcon({ size = 24, color = "black" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 -960 960 960"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M140.001-254.616v-59.999h679.998v59.999H140.001Zm0-195.385v-59.998h679.998v59.998H140.001Zm0-195.384v-59.999h679.998v59.999H140.001Z"
        fill={color}
      />
    </svg>
  );
}
