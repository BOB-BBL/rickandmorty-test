import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";

export const metadata = {
  title: "Image Prompt",
  description: "A place to share images and get feedback",
};

export default function AIPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex w-full grow bg-slate-900">{children}</main>
      <Footer />
    </>
  );
}
