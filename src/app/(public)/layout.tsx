import PublicHeader from '@/components/layouts/PublicHeader';
import StoreProvider from '@/store/StoreProvider';

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <PublicHeader />
      <StoreProvider>{children}</StoreProvider>
    </div>
  );
}
