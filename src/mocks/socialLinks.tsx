import {
  FaLinkedin,
  FaGithubSquare,
  FaInstagram,
  FaFacebookSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    icon: <FaLinkedin className="Footer__logo-socials__socials__social" />,
    link: "https://www.linkedin.com/in/christian-schillaci-61ba2b26a/",
  },
  {
    icon: (
      <FaSquareXTwitter className="Footer__logo-socials__socials__social" />
    ),
    link: "/",
  },
  {
    icon: <FaGithubSquare className="Footer__logo-socials__socials__social" />,
    link: "https://github.com/ChriSchillaci",
  },
  {
    icon: <FaInstagram className="Footer__logo-socials__socials__social" />,
    link: "/",
  },
  {
    icon: (
      <FaFacebookSquare className="Footer__logo-socials__socials__social" />
    ),
    link: "/",
  },
];

export default socialLinks;
