import PublicHeader from '@/components/layouts/PublicHeader';
export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <PublicHeader />
      {children}
    </div>
  );
}
