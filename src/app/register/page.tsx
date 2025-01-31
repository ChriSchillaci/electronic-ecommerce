import { Metadata } from "next";
import CredForm from "@/components/CredForm";
import CredFormWrapper from "@/components/CredFormWrapper";

export const metadata: Metadata = {
  title: "Sign up",
  description: "...",
};

export default function RegisterPage() {
  return (
    <CredFormWrapper>
      <CredForm btnText="Sign Up" />
    </CredFormWrapper>
  );
}
