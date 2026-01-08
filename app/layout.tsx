import { Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}