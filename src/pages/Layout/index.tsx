import Card from "../../components/Card";
type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <main className="flex flex-col justify-center items-center h-screen bg-light-grayish-cyan gap-4 transition-all">
        <Card />
        <footer className='text-center text-black font-abril-fatface font-rubik text-lg mt-12'>
          <p>Created by: <a className='font-bold' href='https://joshsevero.dev'>Josh Severo</a></p>
          <p>Open Source on: <a className='font-bold' href='https://github.com/DIVISIONSolar/Weather-App'>Github</a></p>
        </footer>
      </main>
    </>
  );
};

export default Layout;
