
import './globals.css'
import Navbar from "./(my-app)/components/Navbar"
import Footer from "./(my-app)/components/Footer"
import Newsletter from "./(my-app)/components/Newsletter"


export const metadata = {
  title: "Inefan",
  description: "Independent Economic & Financial Analysis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-stone-100 dark:bg-stone-950 dark:scheme-dark overflow-y-scroll text-stone-900 dark:text-stone-100 flex flex-col team2:pt-18.5 pt-16.5 min-h-dvh">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
