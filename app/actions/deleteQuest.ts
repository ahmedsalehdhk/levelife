'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function deleteQuest(id: string) {
  await prisma.quest.delete({
    where: { id },
  });

  revalidatePath('/quests');
}


// confirmation