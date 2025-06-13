import { z } from 'zod';

export const threadSchema = z.object({
  name: z.string({ required_error: '名前は必須です' }).min(1, '名前は必須です'),
  title: z
    .string({ required_error: 'タイトルは必須です' })
    .min(1, 'タイトルは必須です')
    .max(20, 'タイトルは最大32文字以内にしてください'),
  content: z
    .string({ required_error: '投稿内容は必須です' })
    .min(1, '投稿内容は必須です')
    .max(400, '投稿内容は400文字以内にしてください'),
});
