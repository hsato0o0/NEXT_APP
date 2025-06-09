import { prisma } from './prisma';

export default async function getComments(id: string) {
  return await prisma.Comment.findMany({
    where: { threadId: id },
  });
}
