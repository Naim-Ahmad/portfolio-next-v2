import "./globals.css";

export const metadata = {
  title: "Naim Ahmad | Full Stack Web Developer",
  description: "I'm a full-stack developer specialized in MERN stack.",
  keywords: [
    "Naim Ahmad",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Front-end Developer",
    "Web Developer",
    "MERN Stack",
    "WebRTC",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
