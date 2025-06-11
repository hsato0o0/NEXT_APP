'use server';
import { redirect } from 'next/navigation';
import { prisma } from '../prisma';

type ActionState = {
  success: boolean;
  errors: Record<string, string[]>;
};

export default async function createThread(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const name = formData.get('name') as string;
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  await prisma.thread.create({
    data: {
      userId: '1',
      name: name,
      title: title,
      content: content,
    },
  });

  redirect('/');
}
