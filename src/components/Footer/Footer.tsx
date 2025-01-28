import Image from "next/image";
import Link from "next/link";
import socialLinks from "@/mocks/socialLinks";
import footerSections from "@/mocks/footerSections";
import "./index.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__news-container">
        <label className="Footer__news-container__label" htmlFor="subscribe">
          Subscribe to our news
        </label>
        <div className="Footer__news-container__input-btn">
          <input
            name="subscribe"
            id="subscribe"
            className="Footer__news-container__input-btn__input"
            placeholder="Enter your email"
          />
          <Link className="Footer__news-container__input-btn__btn" href={"/"}>
            Subscribe
          </Link>
        </div>
      </div>
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
                href={link.link}
              >
                {link.text}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <p className="Footer__signature">Made by Christian Schillaci</p>
    </footer>
  );
};

export default Footer;
