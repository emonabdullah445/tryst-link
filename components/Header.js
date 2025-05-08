import Image from "next/image";
import Logo from "../public/images/logo2.png";
import { FaBars } from "react-icons/fa";
import { GoSearch } from "react-icons/go";

function Header() {
  return (
    <div className="sticky top-0 w-full bg-custom-gray3 flex justify-between">
      <div className=" px-5 lg:px-[30px] py-[10px]  flex justify-between lg:justify-start lg:gap-[100px] items-center text-white font-OpenSans">
        <div className="w-[120px] h-auto">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="mt-[6px] mr-3 lg:mr-0 flex gap-[50px] text-[21px]">
          <div className="flex items-center">
            <span className="mr-3 text-[20px]">
              {/* <FaBars /> */}
              <GoSearch />
            </span>
            Search
          </div>
        </div>
      </div>
      <div className="hidden  lg:block lg:text-[18px] text-white pr-20 pt-3">
        {" "}
        Login<span className="text-sm pl-2">or</span> Sign up
      </div>
    </div>
  );
}

export default Header;
