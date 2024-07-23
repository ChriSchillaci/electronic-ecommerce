import { auth } from "@/app/auth";

export default auth((req) => {
  console.log("it works");
});
