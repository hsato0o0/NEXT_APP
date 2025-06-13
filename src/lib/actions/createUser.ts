'use server';

import { redirect } from 'next/navigation';
import { prisma } from '../prisma';
import bcryptjs from 'bcryptjs';
import { signIn } from '@/auth';
import { registerSchema } from '@/validations/user';

type ActionState = {
  success: boolean;
  errors: Record<string, string[]>;
};
export default async function createUser(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirmPassword') as string;

  const validationResult = registerSchema.safeParse({
    name,
    email,
    password,
    confirmPassword,
  });

  if (!validationResult.success) {
    const errors = validationResult.error.flatten().fieldErrors;
    return {
      success: false,
      errors: errors,
    };
  }

  const exisitingRecord = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (exisitingRecord) {
    return {
      success: false,
      errors: {
        email: ['このメールアドレスはすでに登録されていま'],
      },
    };
  }

  const hashedPassword = await bcryptjs.hash(password, 12);
  await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
    },
  });

  await signIn('credentials', {
    email: email,
    password: password,
    redirect: false,
  });

  redirect('/user');
}
