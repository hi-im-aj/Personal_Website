const Header = () => {
  return (
    <div className="flex p-12">
      <div className="w-6/12 px-6 leading-loose">
        <p className="text-2xl mb-8">Hi! Im AJ</p>
        <h1 className="text-6xl font-bold leading-normal :wave">
          Frontend Engineer at{" "}
          <span className="underline text-emerald-500">Cool Company</span>
        </h1>
        <p className="opacity-80 mb-8">Programming since 2018.</p>
        <button className="bg-black border-white border-2 w-56 h-12">
          TAKE A LOOK
        </button>
      </div>
      <div className="w-6/12 px-6 grid place-items-center">
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/OO9AzdBArdM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Header;
