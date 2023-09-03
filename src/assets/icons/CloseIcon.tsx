interface Props {
  size?: number;
  color?: string;
}

export default function CloseIcon({ size = 24, color = "black" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 -960 960 960"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M256-213.847 213.847-256l224-224-224-224L256-746.153l224 224 224-224L746.153-704l-224 224 224 224L704-213.847l-224-224-224 224Z"
        fill={color}
      />
    </svg>
  );
}
