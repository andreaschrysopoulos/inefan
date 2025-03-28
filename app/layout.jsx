import "./globals.css";

export const metadata = {
  title: "Inefan",
  description: "Independent Economic & Financial Analysis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <main>
          {children}
        </main>

      </body>
    </html>
  );
}
