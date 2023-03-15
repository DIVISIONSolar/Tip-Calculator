import Input from "../Inputs";
import DollorLogo from "../../assets/icon-dollar.svg";
import PersonLogo from "../../assets/icon-person.svg";
import Button from "../Buttons";
import percentageNumbers from "../../utils";
import Display from "../Display";
import { calculatorActions } from "../../store/calculator-slice.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
type Props = {};

const Card = (props: Props) => {
  const dispatch = useDispatch();
  const calculatorState = useSelector((state: any) => state.calculator);
  const { inputBill, inputNumberPeople, selectTip } = calculatorState;

  const onChangeValueBill = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    dispatch(calculatorActions.changeInputBill(value));
  };

  const onchangeSelectedTip = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e;
    dispatch(calculatorActions.changeSelectedTip(value));
  };

  const onchangeInputPeople = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    dispatch(calculatorActions.changeInputPeople(value));
  };

  useEffect(() => {
    const percentage = () => {
      const overAllPercentage =
        (inputBill * selectTip) / 100 / inputNumberPeople;
      const overAllAmount = inputBill / inputNumberPeople + overAllPercentage;

      dispatch(calculatorActions.calculateTipAmount(overAllPercentage));
      dispatch(calculatorActions.calculateTotal(overAllAmount));
    };
    percentage();
  }, [inputBill, inputNumberPeople, selectTip]);
  return (
    <>
      <main className="bg-custom-white gap-10 md:gap-0  p-10  flex flex-col justify-center items-center md:flex-row rounded-xl shadow-2xl border-none">
        <section className="md:w-96 flex flex-col gap-[1.1rem]  ">
          <Input
            name={"Bill"}
            alt={"dollar"}
            logo={DollorLogo}
            onChange={onChangeValueBill}
            value={inputBill}
            invalid={
              inputBill === 0 && selectTip !== 0 && inputNumberPeople !== 0
                ? false
                : true
            }
          />
          <article className="flex flex-wrap flex-col gap-2">
            <label
              htmlFor="percentage"
              className="text-lg text-dark-grayish-cyan font-semibold"
            >
              Select Tip %
            </label>
            <span className="flex flex-wrap gap-2 animate-vote">
              {percentageNumbers.map((item: { id: number; number: any }) => (
                <Button
                  name={`${item.number}%`}
                  key={item.id}
                  seleted={selectTip === item.number ? "bg-strong-cyan" : ""}
                  handleValueUpdate={() => onchangeSelectedTip(item.number)}
                />
              ))}
              <input
                type="number"
                placeholder="Custom"
                className="shadow focus:outline-very-dark-cyan bg-light-grayish-cyan-alt outline-none border-none focus:border-none w-24 text-center text-very-dark-cyan font-bold placeholder:text-very-dark-cyan rounded p-1 text-xl"
                onChange={(e: any) => onchangeSelectedTip(e.target.value)}
                value={selectTip || "Custom"}
              />
            </span>
          </article>
          <Input
            name={"Number of People"}
            alt={"person"}
            logo={PersonLogo}
            onChange={onchangeInputPeople}
            value={inputNumberPeople}
            invalid={
              inputBill !== 0 && selectTip !== 0 && inputNumberPeople === 0
                ? false
                : true
            }
          />
        </section>
        <section>
          <Display />
        </section>
      </main>
    </>
  );
};

export default Card;
