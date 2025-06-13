'use server';
import { redirect } from 'next/navigation';
import { prisma } from '../prisma';
import { threadSchema } from '@/validations/thread';
import { auth } from '@/auth';

type ActionState = {
  success: boolean;
  errors: Record<string, string[]>;
};

export default async function createThread(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const session = await auth();

  const userId = session?.user?.id;
  const name = formData.get('name') as string;
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  const validationResult = threadSchema.safeParse({
    name,
    title,
    content,
  });

  if (!validationResult.success) {
    const errors = validationResult.error.flatten().fieldErrors;
    return { success: false, errors: errors };
  }

  await prisma.thread.create({
    data: {
      userId: userId,
      name: name,
      title: title,
      content: content,
    },
  });

  redirect('/');
}
