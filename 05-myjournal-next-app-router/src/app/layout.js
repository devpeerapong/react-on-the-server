import ThemeRegistry from "@/ThemeRegistry";
import { Navigation } from "@/components/Navigation";

export const metadata = {
  title: "My Journal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "mui" }}>
          <Navigation />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
