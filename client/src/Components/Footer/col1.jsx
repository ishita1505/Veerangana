import React from "react";
import Logo from "../Footer/logo.png";
function Col1() {
  return (
    <div className="flex flex-col  px-auto   my-auto mx-auto w-2/5   lg:px-10">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
}
export default Col1;
