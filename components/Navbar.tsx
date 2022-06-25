import Link from "next/link";
import Bars from "@components/icons/Bars";

const navbar = () => {
  return (
    <div className="inline-flex w-full">
      <div className="w-6/12"></div>
      <div className="w-6/12">
        <Bars />

        <ul className="hidden">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
