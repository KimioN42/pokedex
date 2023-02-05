import React, { FC } from "react";
import { BtnProps } from "../../interfaces/global";

const PrimaryButton: FC<BtnProps> = ({ name, style, handleClick }) => {
  return (
    <div style={style} onClick={handleClick}>
      {name}
    </div>
  );
};

export default PrimaryButton;
