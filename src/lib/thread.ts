import { prisma } from './prisma';

export default async function getComments(id: string) {
  return await prisma.comment.findMany({
    where: { threadId: id },
  });
}

export async function getThreads() {
  return await prisma.thread.findMany({
    include: { comments: true },
  });
}

export async function getThread(id: string) {
  return await prisma.thread.findMany({
    where: { id: id },
  });
}

export async function searchThread(query: string) {
  const normalizedSearch = query.replace(/[\s　]+/g, ' ').trim();
  const searchWords = normalizedSearch.split(' ').filter(Boolean);

  const filters = searchWords.map((word) => ({
    OR: [{ title: { contains: word } }, { content: { contains: word } }],
  }));

  return prisma.thread.findMany({
    where: {
      AND: filters,
    },
    include: { comments: true },
  });
}
