import React from "react";
import style from "./style.module.css";

interface DescriptionBlockProps {
  children: React.ReactNode;
}

export default function DescriptionBlock({ children }: DescriptionBlockProps) {
  return <p className={style.description__block}>{children}</p>;
}
