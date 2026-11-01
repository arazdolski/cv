import Layout from "@/components/Layout";
import { Analytics } from "@vercel/analytics/next";
import "@/styles/globals.css";

const title = "Aleksandr Razdolski - CV";
const description =
  "Site Reliability Engineer at Bolt. Located in Tallinn, Estonia. Check his CV.";

export const metadata = {
  metadataBase: new URL("https://arazdolski.xyz"),
  title,
  description: "CV",
  authors: [{ name: "Aleksandr Razdolski" }],
  openGraph: {
    url: "/",
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-950">
        <Layout>{children}</Layout>
        <Analytics />
      </body>
    </html>
  );
}
