import HamburgerMenu from "./features/hamburger/HamburgerMenu";

const Home = () => {
  return (
    <div className="h-svh w-full">
      <header className="p-2 flex items-center justify-between shadow-md">
        <h1 className="text-2xl">
          Joby <span className="text-xs text-primary ">v4</span>
        </h1>

        <nav className="space-x-2">
          <HamburgerMenu />
        </nav>
      </header>
    </div>
  );
};

export default Home;
