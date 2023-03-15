//@ts-nocheck
import { useDispatch, useSelector } from "react-redux";
import { calculatorActions } from "../../store/calculator-slice";

type Props = {};

const Display = (props: Props) => {
  const dispatch = useDispatch();
  const calculatorState = useSelector((state: any) => state.calculator);
  const { tipAmount, total } = calculatorState;
  const reset = () => {
    dispatch(calculatorActions.resetCalculator());
  };
  return (
    <>
      <section className="bg-very-dark-cyan text-white py-4 px-6 w-80 rounded-xl flex flex-col gap-24 ">
        <span className="flex flex-col gap-10 pt-6">
          <article className="flex justify-between items-center ">
            <h1 className="text-xs font-bold flex flex-col items-center">
              Tip Amount
              <span className="text-light-grayish-cyan">Per person</span>
            </h1>
            <h1 className="text-5xl text-strong-cyan font-extrabold overflow-hidden">
              ${tipAmount}
            </h1>
          </article>
          <article className="flex justify-between items-center">
            <h1 className="text-xs font-bold flex flex-col items-center">
              Total
              <span className="text-light-grayish-cyan">Per person</span>
            </h1>
            <h1 className="text-5xl text-strong-cyan font-extrabold overflow-hidden">
              ${total}
            </h1>
          </article>
        </span>

        <button
          onClick={reset}
          className="w-full bg-strong-cyan hover:bg-light-grayish-cyan mb-4 font-bold p-2  rounded transition-all text-xl text-white"
        >
          Reset
        </button>
      </section>
    </>
  );
};

export default Display;
