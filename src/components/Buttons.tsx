import React from "react";

interface buttonsProps {
  title: string;
  onClick?: () => void;
  className: string;
  type?: "button" | "submit";
}

export default function Buttons({
  title,
  onClick,
  className,
  type,
}: buttonsProps) {
  return (
    <button className={className} onClick={onClick} type={type}>
      {title}
    </button>
  );
}
