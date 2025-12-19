import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "@/context/ThemeContext";
import LenisScroll from "@/components/Lenis";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata = {
    title: "Portfolio - Akshith Anand",
    description: "Welcome to my portfolio website.",
};

export default function RootLayout({ children }) {
    return (
            <html lang="en" className="scroll-smooth">
            <body>
                <ThemeContextProvider>
                    <LenisScroll />
                    {children}
                </ThemeContextProvider>
            </body>
            </html>
        
    );
}