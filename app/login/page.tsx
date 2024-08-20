import LoginForm from "../../components/LoginForm";
// import { auth } from "@/app/auth";
// import { signOut } from "@/app/auth";
// import { redirect } from "next/navigation";

export default async function loginPage() {
  // const session = await auth();
  // if (!session) redirect("/");

  return (
    <div>
      <LoginForm />
      {/* {session?.user ? (
        <>
          <div>{session.user.email}</div>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button type="submit">logout</button>
          </form>
        </>
      ) : (
        <div>niente sessione</div>
      )} */}
    </div>
  );
}
