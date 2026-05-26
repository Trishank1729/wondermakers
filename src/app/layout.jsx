import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

// Load Google Font: Plus Jakarta Sans for visual modernism (Satoshi/Neue Montreal alternative)
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// High-end agency SEO Metadata and Title tags (SEO Best Practice)
export const metadata = {
  title: "Wonder Makers — High-End Design. Crafted Code.",
  description: "We are a digital product studio for teams who see design and engineering as their competitive advantage. From flagship websites to scalable applications, we build products where world-class aesthetics meet robust infrastructure.",
  keywords: ["digital product studio", "premium agency", "flagship websites", "Framer Motion", "GSAP ScrollTrigger", "web application design", "interactive 3D"],
  authors: [{ name: "Wonder Makers Studio" }],
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-foreground bg-background">
        {/* Subtle, beautiful analog paper grain overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        
        {/* High-end smooth inertia scrolling */}
        <SmoothScroll>
          <div className="relative min-h-screen z-10 flex flex-col justify-between">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
