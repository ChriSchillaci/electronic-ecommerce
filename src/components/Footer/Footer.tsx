import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedin,
  FaGithubSquare,
  FaInstagram,
  FaFacebookSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import "./index.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__logo-socials">
        <Image
          className="Footer__logo-socials__logo"
          src={"/images/logo.png"}
          alt="logo"
          height={60}
          width={60}
        />
        <div className="Footer__logo-socials__socials">
          <FaLinkedin className="Footer__logo-socials__socials__social" />
          <FaSquareXTwitter className="Footer__logo-socials__socials__social" />
          <FaGithubSquare className="Footer__logo-socials__socials__social" />
          <FaInstagram className="Footer__logo-socials__socials__social" />
          <FaFacebookSquare className="Footer__logo-socials__socials__social" />
        </div>
      </div>
      <div className="Footer__info">
        <div className="Footer__info__links">
          <h2 className="Footer__info__links__title">Company</h2>
          <Link className="Footer__info__links__link" href={"/"}>
            Lorem, ipsum dolor.
          </Link>
          <Link className="Footer__info__links__link" href={"/"}>
            Lorem, ipsum dolor.
          </Link>
          <Link className="Footer__info__links__link" href={"/"}>
            Lorem, ipsum dolor.
          </Link>
        </div>
        <div className="Footer__info__links">
          <h2 className="Footer__info__links__title">Partners</h2>
          <Link className="Footer__info__links__link" href={"/"}>
            Lorem, ipsum dolor.
          </Link>
          <Link className="Footer__info__links__link" href={"/"}>
            Lorem, ipsum dolor.
          </Link>
          <Link className="Footer__info__links__link" href={"/"}>
            Lorem, ipsum dolor.
          </Link>
        </div>
        <div className="Footer__info__links">
          <h2 className="Footer__info__links__title">Help</h2>
          <Link className="Footer__info__links__link" href={"/"}>
            Lorem, ipsum dolor.
          </Link>
          <Link className="Footer__info__links__link" href={"/"}>
            Lorem, ipsum dolor.
          </Link>
          <Link className="Footer__info__links__link" href={"/"}>
            Lorem, ipsum dolor.
          </Link>
        </div>
        <div className="Footer__info__links">
          <h2 className="Footer__info__links__title">Subscribe</h2>
          <input
            className="Footer__info__links__input"
            placeholder="Enter your email"
          />
          <button className="Footer__info__links__btn">Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
