import Link from "next/link";
import { MdError } from "react-icons/md";
import "@/styles/NotFound.scss";

export default function NotFound() {
  return (
    <div className="NotFound">
      <div className="NotFound__container">
        <h1 className="NotFound__container__number">
          4
          <span>
            <MdError className="NotFound__container__number__icon" />
          </span>
          4
        </h1>
        <h2 className="NotFound__container__title">Page not found</h2>
        <p>The page you{"'"}re looking for was not found</p>
        <Link href={"/"} className="NotFound__container__btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
