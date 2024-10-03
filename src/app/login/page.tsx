import CredForm from "@/components/CredForm";
import CredFormWrapper from "@/components/CredFormWrapper";

export default async function LoginPage() {
  return (
    <CredFormWrapper>
      <CredForm btnText="Sign in" />
    </CredFormWrapper>
  );
}
