import Link from "next/link";
import Image from "next/image";
import Menu from "../components/Menu";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT  */}
      <div className="w-[14%] md:w-[8%] lg:w-[14%] xl:w-[16%] bg-white p-2">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2 p-4"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block text-xs text-black">
            Recipe System
          </span>
        </Link>
        <Menu />
      </div>

      {/* RIGHT  */}
      <div className="w-[86%] md:w-[92%] lg:w-[86%] xl:w-[84%] bg-[#fff4e6]">
        l
      </div>
    </div>
  );
}
