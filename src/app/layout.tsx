
export const metadata={
  title: {
    template: "%s | Technical agency",
    default: 'Technical Agency', 
  } 
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {/* {children} */}
        <h1> My root Layout</h1>
         {children}
      </body>
    </html>
  );
}