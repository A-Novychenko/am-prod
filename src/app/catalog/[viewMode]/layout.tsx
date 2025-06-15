// export const dynamic = 'force-dynamic';
// export const fetchCache = 'no-store';
// '"auto" | "force-no-store" | "only-no-store" | "default-no-store" | "default-cache" | "only-cache" | "force-cache" | undefined'.
// export const revalidate = 0;

export default function ViewModeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
