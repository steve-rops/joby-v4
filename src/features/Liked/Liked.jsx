import LikedListing from "./LikedListing/LikedListing";

const Liked = () => {
  return (
    <div className="">
      <header className="p-3">
        <h1 className="text-5xl text-primary">Liked.</h1>
      </header>

      <main className="flex">
        <LikedListing />
      </main>
    </div>
  );
};

export default Liked;
