import Link from "next/link";
import Logo from "/public/logo.png";
import Image from "next/image";
import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/shared/Button";
import NavDarkTheme from "./NavDarkTheme";

const Header = () => {
  return (
    // wrapper is sending children to Wrapper.tsx
    <header className="sticky top-0  z-20 bg-slate-100 ">
      <Wrapper>
        <div className="flex justify-between py-5 px-3  items-center">
          {/* {logo} */}
          {/* <h2 className="text-xl font-bold">panaverse logo</h2> */}
          <div>
            <Image src={Logo} alt="Panverse dao" />
          </div>

          {/* {navigation bar} */}
          <div>
            <ul className="flex flex-2 space-x-8 font-medium items-center">
              <li>
                {/* it redirect me to home page */}
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href="/courses">Courses</Link>
              </li>
              <li>
                <Link href="/courses">Contacts</Link>
              </li>
              <li>
                <Link href="/courses">Apply Now</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <NavDarkTheme />
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
