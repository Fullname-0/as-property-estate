import { FC } from "react";
import Image from "next/image";
import NextLink from "next/link";
import classes from "./Logo.module.css";

const Logo: FC = () => {
  return (
    <NextLink href="/" passHref>
      <a>
        <Image
          src="/logo.svg"
          alt="AS-Property Logo"
          className={classes.imageButton}
          width={440}
          height={110}
          layout={"responsive"}
        />
      </a>
    </NextLink>
  );
};

export default Logo;
