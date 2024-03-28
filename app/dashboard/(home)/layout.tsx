import Header from "@/components/Header";
import SideNav from "@/components/SideNav";

export default function HomePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Header />
      {children}
    </div>
  );
}
