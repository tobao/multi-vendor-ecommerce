import { ThemeToggle } from "@/components/shared/ThemeToggle";
// import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
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
