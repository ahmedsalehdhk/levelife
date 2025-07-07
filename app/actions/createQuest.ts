'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from "next/cache";
import { QuestCategory, QuestDifficulty, QuestRepeat } from "@prisma/client";

export const createQuest = async (formData: FormData) => {
    
    const title = formData.get("title") as string
    const category = formData.get("category") as QuestCategory
    const difficulty = formData.get("difficulty") as QuestDifficulty
    const repeat = formData.get("repeat") as QuestRepeat

    await prisma.quest.create({
      data: {
        title,
        category,
        difficulty,
        repeat
      }
    })
    revalidatePath("/quests");
  }