import styles from "./style.module.css";
import React from "react";

type IconsProps = {
  children: React.ReactNode;
};

export function Icons({ children }: IconsProps) {
  return (
    <nav className={styles.iconContainer}>
      {React.Children.map(children, (child) => (
        <a className={styles.icon}>{child}</a>
      ))}
    </nav>
  );
}
