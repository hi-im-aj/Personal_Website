import Link from "next/link";
import Bars from "@components/icons/Bars";
import { useState } from "react";

const navbar = () => {
  const [active, setActive] = useState(false);

  const liClass = "p-4";
  const linkClass =
    "p-4 text-gray-400 hover:bg-amber-500 transition hover:text-white";

  const listItems = (
    <>
      <li className={liClass}>
        <Link href="/">
          <button onClick={() => setActive(false)} className={linkClass}>
            Home
          </button>
        </Link>
      </li>
      <li className={liClass}>
        <Link href="/about">
          <button onClick={() => setActive(false)} className={linkClass}>
            About
          </button>
        </Link>
      </li>
      <li className={liClass}>
        <Link href="/contact">
          <button onClick={() => setActive(false)} className={linkClass}>
            Contact
          </button>
        </Link>
      </li>
    </>
  );

  const menu = (
    <div className="flex z-50">
      <div className="w-2/5 h-screen bg-black opacity-80" />
      <div className="w-3/5 h-screen bg-white z-50">
        <button onClick={() => setActive(!active)}>close</button>
        <ul>{listItems}</ul>
      </div>
    </div>
  );
  return (
    <div className="bg-black text-white h-14">
      <div className="inline-flex w-full">
        <div className="w-6/12"></div>
        <div className="w-6/12 flex justify-end"></div>
      </div>
    </div>
  );
  return (
    <div>
      {active && menu}
      <div className="inline-flex w-full">
        <div className="w-6/12"></div>
        <div className="w-6/12 flex justify-end">
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setActive(!active)}
          >
            <Bars />
          </div>
          <ul className="md:inline-flex hidden">{listItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default navbar;
