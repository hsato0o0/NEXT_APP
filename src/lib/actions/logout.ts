'use server';

import { signOut } from '@/auth';
import { redirect } from 'next/navigation';

export default async function logout() {
  await signOut({ redirect: false });

  redirect('/');
}
