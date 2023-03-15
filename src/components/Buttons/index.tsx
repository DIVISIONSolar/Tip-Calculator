import React from "react";
import { useSelector } from "react-redux";
type Props = {
  name: any;
  handleValueUpdate: (e: React.MouseEvent<HTMLButtonElement>) => void;
  seleted: string;
};

const Button = (props: Props) => {
  return (
    <>
      <button
        onClick={props.handleValueUpdate}
        className={`w-24 bg-very-dark-cyan font-bold hover:bg-strong-cyan hover:text-very-dark-cyanfont-bold p-2 rounded transition-all text-xl text-white ${props.seleted}`}
      >
        {props.name}
      </button>
    </>
  );
};

export default Button;
