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
    label: "LinkedIn",
  },
  {
    icon: (
      <FaSquareXTwitter className="Footer__logo-socials__socials__social" />
    ),
    link: "/",
    label: "X",
  },
  {
    icon: <FaGithubSquare className="Footer__logo-socials__socials__social" />,
    link: "https://github.com/ChriSchillaci",
    label: "GitHub",
  },
  {
    icon: <FaInstagram className="Footer__logo-socials__socials__social" />,
    link: "/",
    label: "Instagram",
  },
  {
    icon: (
      <FaFacebookSquare className="Footer__logo-socials__socials__social" />
    ),
    link: "/",
    label: "Facebook",
  },
];

export default socialLinks;
