import { SignUp } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    return (
      <SignUp
        appearance={{
          elements: {
            rootBox: "mx-auto pt-12",
            formButtonPrimary: {
              backgroundColor: "#5755eb",
            }
          },
        }}
      />
    );
  }

  return (
    <main className="flex flex-col pt-12 items-center gap-12 justify-center">
      {/* <p className="">👋 Hello {user.emailAddresses[0].emailAddress}</p> */}
      <p className="text-3xl">
        👋 Hello {user.firstName} {user.lastName}{" "}
      </p>
    </main>
  );
}
