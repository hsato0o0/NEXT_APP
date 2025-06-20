'use client';
import { Provider } from 'react-redux';
import { store } from '.';

export default function StoreProvider({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return <Provider store={store}>{children}</Provider>;
}
