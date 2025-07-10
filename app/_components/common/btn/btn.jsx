import Link from "next/link";
import Image from "next/image";
import styles from "./btn.module.scss";
import { LuMail } from "react-icons/lu";
import lineIcon from "/public/icon-line.svg";
import { IoArrowForward } from "react-icons/io5";
import IconLine from "../../icons/icon-line";

export default function Btn({ href, isExternal, theme, icon, children, ...props }) {
  const getThemeClass = (theme) => {
    switch (theme) {
      case "main": {
        return styles.themeMain;
      }
      case "main-reverse": {
        return styles.themeMainReverse;
      }
      case "secondary": {
        return styles.themeSecondary;
      }
      case "secondary-reverse": {
        return styles.themeSecondaryReverse;
      }
      case "line": {
        return styles.themeLine;
      }
      default:
        return styles.themeMain;
    }
  };
  const themeClass = getThemeClass(theme);

  return (
    <Link
      href={href}
      className={`${styles.btn} ${themeClass}`}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    >
      <span className={styles.text}>{children}</span>

      {icon === "arrow" && (
        <span className={styles.icon}>
          <IoArrowForward className={styles.iconArrow} />
        </span>
      )}

      {icon === "mail" && (
        <span className={styles.icon}>
          <LuMail className={styles.iconMail} />
        </span>
      )}

      {icon === "line" && (
        <span className={styles.iconLine}>
          <IconLine />
        </span>
      )}
    </Link>
  );
}
