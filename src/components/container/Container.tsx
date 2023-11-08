import React from "react";
import style from "./style.module.css";
import clsx from "clsx";
export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={clsx(style.container, className)}>{children}</div>;
};
