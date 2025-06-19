'use server';
import { redirect } from 'next/navigation';
import { prisma } from '../prisma';

type ActionState = {
  success: boolean;
  errors: Record<string, string[]>;
};

export default async function postComment(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const name = formData.get('name') as string;
  const comment = formData.get('comment') as string;
  const id = formData.get('id') as string;
  const path = formData.get('path') as string;

  await prisma.comment.create({
    data: {
      threadId: id,
      name: name,
      comment: comment,
    },
  });

  redirect(`${path}${id}`);
}
