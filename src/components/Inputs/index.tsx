import { useState } from "react";

type Props = {
  name: string;
  logo: string;
  alt: string;
  onChange: (val: React.ChangeEvent<HTMLInputElement>) => void;
  value: number | string;
  invalid: any;
};

const Input = (props: Props) => {
  const [empty, setEmpty] = useState(false);
  return (
    <>
      <label
        htmlFor={props.name}
        className="text-lg text-dark-grayish-cyan font-semibold"
      >
        {props.name}
      </label>
      <p
        className={`ml-44 -my-4 text-sm text-red-600 font-semibold ${
          props.invalid ? "hidden" : "block animate-bounce"
        }`}
      >
        Can't be zero
      </p>
      <span className="flex bg-light-grayish-cyan-alt w-fit rounded items-center shadow  ">
        <img src={props.logo} alt={props.alt} className="h-4 absolute m-1" />
        <input
          type="number"
          className={`bg-transparent w-[19rem] text-right p-2 ${
            props.invalid
              ? "focus:outline-very-dark-cyan"
              : "focus:outline-red-600 "
          } text-very-dark-cyan font-bold placeholder:text-very-dark-cyan text-xl`}
          placeholder="0"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.onChange(e)
          }
          value={props.value === 0 ? "" : props.value}
        />
      </span>
    </>
  );
};

export default Input;
