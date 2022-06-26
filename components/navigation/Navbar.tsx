import { useState } from "react";
import Bars from "@components/icons/Bars";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const menu = (
    <div className="w-screen h-screen z-40 px-10 py-20">
      <ul>
        <li className="py-3">
          <Link href="/">
            <div
              className="hover:text-emerald-500"
              onClick={() => setActive(false)}
            >
              <span className="text-xs mr-2">01.</span>
              <button className="text-xl font-bold">Home</button>
            </div>
          </Link>
        </li>
        <li className="py-3">
          <a
            target="_blank"
            rel="noopener"
            href="https://www.youtube.com/channel/UCIoQUWUyHsn3Q3GPFiKgiPA"
          >
            <div
              className="hover:text-emerald-500"
              onClick={() => setActive(false)}
            >
              <span className="text-xs mr-2">02.</span>
              <button className="text-xl font-bold">YouTube</button>
            </div>
          </a>
        </li>
        <li className="py-3">
          <Link href="/about">
            <div
              className="hover:text-emerald-500"
              onClick={() => setActive(false)}
            >
              <span className="text-xs mr-2">03.</span>
              <button className="text-xl font-bold">About me</button>
            </div>
          </Link>
        </li>
        <li className="py-3">
          <Link href="/resume">
            <div
              className="hover:text-emerald-500"
              onClick={() => setActive(false)}
            >
              <span className="text-xs mr-2">04.</span>
              <button className="text-xl font-bold">Resume</button>
            </div>
          </Link>
        </li>
        <li className="py-3">
          <Link href="/contact">
            <div
              className="hover:text-emerald-500"
              onClick={() => setActive(false)}
            >
              <span className="text-xs mr-2">05.</span>
              <button
                onClick={() => setActive(false)}
                className="text-xl font-bold"
              >
                Contact
              </button>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <div className="flex p-5 sticky">
        <div className="w-6/12">
          <Link href="/">
            <h1
              onClick={() => setActive(false)}
              className="text-4xl font-bold cursor-pointer"
            >
              AJ.
            </h1>
          </Link>
        </div>
        <div className="w-6/12 inline-flex justify-end">
          <div
            onClick={() => setActive(!active)}
            className="inline-flex leading-7 cursor-pointer"
          >
            <Bars />
            <p className="ml-2">Menu</p>
          </div>
        </div>
      </div>
      {active && menu}
    </>
  );
};

export default Navbar;
