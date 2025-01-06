export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="grow bg-mediumBg">{children}</div>;
}
