import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-[#f3f3f3] text-base-content p-4 mt-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Book
          Vibe
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
