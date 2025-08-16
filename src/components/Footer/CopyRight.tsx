import React from "react";

const CopyRight = () => {
  return (
    <div className="bg-[#1d273e] flex items-center justify-between Container py-1">
      <p className="sm:text-sm text-[10px] text-white/85">
        © 2025  <a href="https://fabtechit.com/" target="_blank" style={{ color: "#ff5500" }}>FabTech.IT</a> All rights reserved.
      </p>
      <p className="sm:text-sm text-[10px] text-white/85">
        Design and Develop by <span className="cursor-pointer"><a style={{ color: "#ff5500" }} href="https://fabtechit.com" target="_blank">FabTech.IT Official</a></span>
      </p>
    </div>
  );
};

export default CopyRight;
