import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { UserButton } from "@clerk/nextjs";

export default function AdminDashboardPage() {
  return (
    <div>
      <div className="w-full flex gap-x-5 justify-end">
        <UserButton/>
        <ThemeToggle/>
      </div>
      <h1 className=" text-blue-500 font-barlow">Hello Admin</h1>
    </div>
  )
}