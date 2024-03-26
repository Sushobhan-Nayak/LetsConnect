import SideNav from "@/components/SideNav";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen relative md:flex-row md:overflow-hidden">
      <div className="flex-none w-20 lg:w-64 md:border-r">
        <SideNav />
      </div>
      <div className="flex-grow flex-1 w-full mt-12 md:mt-0 md:overflow-y-auto sm:p-6 md:p-12 max-w-7xl mw-auto">
        hi
      </div>
    </div>
  );
}
