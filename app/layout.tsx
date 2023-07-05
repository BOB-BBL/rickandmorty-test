import "./globals.css";

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
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="flex flex-col min-h-screen">{children}</div>
      </body>
    </html>
  );
}
