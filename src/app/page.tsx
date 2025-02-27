import { ThemeToggle } from "@/components/shared/ThemeToggle";
// import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();

  if (!user?.privateMetadata?.role || user?.privateMetadata.role === "USER") {
    return (
      <div>
        <div className="w-full flex gap-x-5 justify-end">
          <UserButton/>
          <ThemeToggle/>
        </div>
        <h1 className=" text-blue-500 font-barlow">Home Page</h1>
      </div>
    );
  }

  if (user.privateMetadata.role === "ADMIN") redirect("/dashboard/admin");

  if (user.privateMetadata.role === "SELLER") redirect("/dashboard/seller");

  
}
