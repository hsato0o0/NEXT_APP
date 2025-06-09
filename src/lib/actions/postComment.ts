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
  const name = formData.get('name');
  const comment = formData.get('comment');
  const id = formData.get('id');

  await prisma.Comment.create({
    data: {
      threadId: id,
      name: name,
      comment: comment,
    },
  });

  redirect(`/threads/${id}`);
}
