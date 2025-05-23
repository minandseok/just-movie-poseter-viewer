import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Movie Poster Viewer",
  description: "Discover amazing movies with beautiful posters",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
