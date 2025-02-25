import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-24 mx-auto mb-2"
        />

        <div className="font-Handjet w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          pmugayapi@hotmail.com
        </div>
      </div>

      <div className="font-Handjet text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p className="font-Handjet">
          © 2025 Panashe Mugayapi. All rights reserved.
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              className="font-Handjet"
              target="_blank"
              href="https://github.com/Panashe1"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="font-Handjet"
              target="_blank"
              href="https://linkedin.com/in/panashe-mugayapi-7a5861185"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="font-Handjet"
              target="_blank"
              href="https://www.instagram.com/panashenathan"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
