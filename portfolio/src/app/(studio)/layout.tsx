import "../globals.css";

export const metadata = {
  title: "My Awesome Site!",
  description: "My portifolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
