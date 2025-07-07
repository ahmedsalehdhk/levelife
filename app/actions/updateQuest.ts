'use server';

import { prisma } from '@/lib/prisma';
import { QuestCategory, QuestDifficulty, QuestRepeat } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export async function updateQuest(id: string, formData: FormData) {
  const title = formData.get('title') as string;
  const category = formData.get('category') as QuestCategory;
  const difficulty = formData.get('difficulty') as QuestDifficulty;
  const repeat = formData.get('repeat') as QuestRepeat;

  await prisma.quest.update({
    where: { id },
    data: { title, category, difficulty, repeat },
  });

  revalidatePath('/quests');
}
