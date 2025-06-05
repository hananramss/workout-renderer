import { Poppins } from "next/font/google";
import "../styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Workout Renderer",
  description:
    "A clean, structured UI to display workouts using React and Tailwind.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="--font-poppins bg-white text-black">{children}</body>
    </html>
  );
}