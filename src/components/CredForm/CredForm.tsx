"use client";

import type { CredFormProps } from "@/types/componentProps";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import handleCredSubmit from "@/utils/handleCredSubmit";
import Link from "next/link";
import { MdErrorOutline } from "react-icons/md";
import "./index.scss";

const CredForm = ({ btnText }: CredFormProps) => {
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState({ status: true, message: "" });
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === "/login";

  return (
    <>
      {!isError.status && (
        <div className={`CredForm__error-container`}>
          <MdErrorOutline className="CredForm__error-container__icon" />
          <p className="CredForm__error-container__text">{isError.message}</p>
        </div>
      )}
      <form
        className="CredForm"
        onSubmit={(e) =>
          handleCredSubmit(e, router, setIsError, setIsPending, isLoginPage)
        }
      >
        {!isLoginPage && (
          <>
            <input
              className="CredForm__input"
              name="first_name"
              placeholder="First Name"
              minLength={5}
              aria-label="First Name"
              required
            />
            <input
              className="CredForm__input"
              name="last_name"
              placeholder="Last Name"
              minLength={5}
              aria-label="Last Name"
              required
            />
          </>
        )}
        <input
          className="CredForm__input"
          type="email"
          name="email"
          placeholder="Email"
          aria-label="Email"
          required
        />
        <input
          className="CredForm__input"
          type="password"
          name="password"
          placeholder="Password"
          aria-label="Password"
          required
        />
        <button
          className={`CredForm__submit ${isPending ? "pending" : ""}`}
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Loading..." : btnText}
        </button>
      </form>
      {isLoginPage && (
        <p>
          Don{"'"}t have an account? Sign up{" "}
          <span className="CredForm__link">
            <Link href={"/register"}>here</Link>
          </span>
        </p>
      )}
    </>
  );
};

export default CredForm;
