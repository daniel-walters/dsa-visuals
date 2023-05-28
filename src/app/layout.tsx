import "./globals.scss";

import { roboto } from "./fonts";

export const metadata = {
  title: "Bubble sort | DSA Visuals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
