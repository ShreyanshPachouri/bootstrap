import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { redirect } from "next/navigation";
import { Landing } from "../components/Landing";
//import LandingPage from "../components/landing/NewLanding";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect('/dashboard')
  }

  return (
  <div className="h-full w-full">
    {/* <Landing /> */}
    < Landing />
  </div> 
  );
}