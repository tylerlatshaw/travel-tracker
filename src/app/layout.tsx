import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <div className="fixed right-[100px] top-[-150px] z-10 h-[150px] w-[400px] rotate-[0deg] transform rounded-full bg-gradient-to-tl from-slate-700 via-cyan-600 to-zinc-400 blur-[150px]"></div>
        <div className="fixed dotted-background h-full top-0 left-0 right-0 z-0">
          <div className="absolute left-0 right-0 bottom-0 h-[300px]">
          </div>
        </div>
        <div className="relative isolate pt-14">
          {children}
        </div>
      </body>
    </html>
  );
}
