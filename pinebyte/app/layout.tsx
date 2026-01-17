// import type { Metadata } from "next";

// import './globals.css';

// // Import Google Fonts
// import { Inter, Montserrat } from "next/font/google";
// import Navbar from './components/Navtabs';
// import Footer from './components/footer';

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   weight: ["400","500","600","700"],
// });

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   variable: "--font-montserrat",
//   weight: ["400","500","600","700"],
// });

// export const metadata: Metadata = {
//   title: " PineByte Digital",
//   description: "Web Development for Business Owners",
//  icons: {
//     icon: "/pinebytelogo.png",
//   },
// };
// // export const metadata: Metadata = {
// //   title: "🔨 Henry Joseph Financial",
// //   description: "The Good Ol’ Boy Retirement System",
// //   icons: {
// //     icon: "/henryjoslogo.png",
// //   },
// // };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${inter.variable} ${montserrat.variable} antialiased bg-gray-50 text-gray-900`}
//       >
//         <Navbar/>
       
//         {children}
//         <Footer/>
//       </body>
//     </html>
//   );
// }
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navtabs";
import Footer from "./components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " PineByte Digital",
  description: "Web Development for Business Owners",
 icons: {
    icon: "/pinebytelogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en">
  <body className={inter.className}>
    <Navbar />
    {children}
    <Footer />
  </body>
</html>

  );
}
