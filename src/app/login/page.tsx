import CredForm from "@/components/CredForm";
import CredFormWrapper from "@/components/CredFormWrapper";

export default async function LoginPage() {
  // const session = await auth();
  // if (!session) redirect("/");

  return (
    <CredFormWrapper>
      <CredForm btnText="Sign in" />
    </CredFormWrapper>
  );
}
