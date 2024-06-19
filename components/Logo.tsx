import React from "react";
import LogoStyles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={LogoStyles.logo}>
      <img width={50} src="/favicon.png" />
      <span>Studium Informatik HS AlbSig</span>
    </div>
  );
}
