import Sidebar from "@/components/Sidebar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName: 'Tarang', lastName: 'Bhargava'};
  return (
    <main className="flex h-full w-full font-inter">
      <Sidebar user = {loggedIn}/>
        {children}
    </main>
  );
}
