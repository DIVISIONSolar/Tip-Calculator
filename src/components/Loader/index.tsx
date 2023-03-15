import "./Loader.css";
type Props = {};

const Loader = (props: Props) => {
  return (
    <>
      <section className="flex items-center justify-center h-screen text-center bg-very-dark-cyan">
        <article className="w-[30rem] h-[13.75rem] relative">
          <h1 className="title text-xl md:text-4xl font-bold uppercase ">
            <span className="spanClass text-cyan-300">SPLITiER</span>
            <span className="spanClass text-light-grayish-cyan-alt ">-</span>
            <span className="spanClass text-cyan-300 ">TIP CALCULATOR</span>
          </h1>
        </article>
      </section>
    
    </>
  );
};

export default Loader;
