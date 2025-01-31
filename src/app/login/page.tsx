import type { Metadata } from "next";
import CredForm from "@/components/CredForm";
import CredFormWrapper from "@/components/CredFormWrapper";

export const metadata: Metadata = {
  title: "Sign in",
  description: "...",
};

export default async function LoginPage() {
  return (
    <CredFormWrapper>
      <CredForm btnText="Sign in" />
    </CredFormWrapper>
  );
}
