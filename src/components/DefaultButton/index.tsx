import { useState } from "react";
import styles from "./styles.module.css";
import { StopCircleIcon, PlayCircleIcon } from "lucide-react";

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: "green" | "red";
} & React.ComponentProps<"button">;

type AvailableColors = "green" | "red";

export function DefaultButton({ ...props }: DefaultButtonProps) {
  const [buttonColor, setButtonColor] = useState<AvailableColors>("green");

  function handleButtonColor() {
    setButtonColor((prevColor) => {
      const nextColor = prevColor === "green" ? "red" : "green";
      return nextColor;
    });
  }

  const iconChange = {
    green: <PlayCircleIcon />,
    red: <StopCircleIcon />,
  };

  return (
    <button
      onClick={handleButtonColor}
      className={`${styles.button} ${styles[buttonColor]}`}
      {...props}
    >
      {iconChange[buttonColor]}
    </button>
  );
}
