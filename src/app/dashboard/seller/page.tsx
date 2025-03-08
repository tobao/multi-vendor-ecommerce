import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { db } from "@/lib/db";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function SellerDashboardPage() {
  //Fetch the current user. If the user is not authenticated, redirect to the homepage
  const user = await currentUser();
  if (!user) {
    redirect("/");
    return; // Ensure no further code is executed after redirect
  }

  // Retrieve the list of stores associated with the authenticated user.
  const stores = await db.store.findMany({
    where: {
      userId: user.id,
    },
  });

  // If the user has no stores, redirect them to the page for creating a new store.
  if (stores.length === 0) {
    redirect("/dashboard/seller/stores/new");
    return; // Ensure no further code is executed after redirect
  }

  // If the user has at least one store, redirect them to the first store's dashboard.
  redirect(`/dashboard/seller/stores/${stores[0].url}`);


  return (
    <div>
      <div className="w-full flex gap-x-5 justify-end">
        <UserButton/>
        <ThemeToggle/>
      </div>
      <h1 className=" text-blue-500 font-barlow">Hello Seller</h1>
    </div>
  )
}