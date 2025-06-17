export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="grow">{children}</div>;
}
