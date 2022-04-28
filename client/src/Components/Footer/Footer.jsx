import React from "react";

import Col1 from "./col1";

import Col3 from "./col3";

function Footer() {
  return (
    <>
      <div
        id="contact"
        className="flex flex-row pt-4 pb-4 h-2/5  bg-gray-900  md:gap-1"
      >
        <Col1 />

        <Col3 />
      </div>
      <div className="bg-custom-dark pb-6 text-center text-xs md:text-base ">
        <h1 className="text-black  ">
          Copyright © Veerangana . All rights reserved
        </h1>
      </div>
    </>
  );
}

export default Footer;
