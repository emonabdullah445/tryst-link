import Image from "next/image";
import React from "react";
import { MdLocationOn } from "react-icons/md";
import Logo3 from "../public/images/logo3.png";
import Logo4 from "../public/images/logo4.png";

function ContentExtra() {
  return (
    <div className="bg-custom-gray2 text-custom-gray3">
      <div className="container  px-5 lg:px-0 py-[35px] lg:py-[60px]">
        <div className="w-[155px] lg:w-[225px] h-auto">
          <Image src={Logo3} alt="logo3" />
        </div>
        <div className="mt-4 w-[145px] lg:w-[150px] h-auto">
          <Image src={Logo4} alt="logo4" />
        </div>
        <div className="flex items-center gap-[9px]">
          <span className="text-lg">
            <MdLocationOn />
          </span>
          <p className="text-sm">Melbourne, Australia</p>
        </div>
      </div>
    </div>
  );
}

export default ContentExtra;
