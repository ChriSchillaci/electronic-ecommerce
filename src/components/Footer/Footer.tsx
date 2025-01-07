import Image from "next/image";
import Link from "next/link";
import socialLinks from "@/mocks/socialLinks";
import footerSections from "@/mocks/footerSections";
import "./index.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__logo-socials">
        <Link href={"/"}>
          <Image
            className="Footer__logo-socials__logo"
            src={"/images/logo.png"}
            alt="logo"
            height={60}
            width={60}
          />
        </Link>
        <div className="Footer__logo-socials__socials">
          {socialLinks.map((social, idx) => (
            <Link key={idx} href={social.link} aria-label={social.label}>
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="Footer__info">
        {footerSections.map((item, idx) => (
          <div key={idx} className="Footer__info__links">
            <h2 className="Footer__info__links__title">{item.section_text}</h2>
            {item.links.map((link, idxLink) => (
              <Link
                key={idxLink}
                className="Footer__info__links__link"
                href={"/"}
              >
                {link.text}
              </Link>
            ))}
          </div>
        ))}
        <div className="Footer__info__links">
          <h2 className="Footer__info__links__title">Subscribe</h2>
          <input
            className="Footer__info__links__input"
            placeholder="Enter your email"
            aria-label="Enter your email"
          />
          <Link href={"/"} className="Footer__info__links__btn">
            Subscribe
          </Link>
        </div>
      </div>
      <p className="Footer__signature">Made by Christian Schillaci</p>
    </footer>
  );
};

export default Footer;
