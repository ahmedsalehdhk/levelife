"use client";

import React, { useState } from "react";
import { useTransition } from "react";
import { Edit3 } from "@deemlol/next-icons";
import Image from 'next/image';
import img from '/public/assets/recognition.png'

// actions
import { deleteQuest } from "@/app/actions/deleteQuest";
import { updateQuest } from "@/app/actions/updateQuest";
import { QuestCategory, QuestDifficulty, QuestRepeat } from "@prisma/client";

type QuestCardProps = {
  id: string;
  title: string;
  category: QuestCategory;
  difficulty: QuestDifficulty;
  repeat: QuestRepeat;
};

const QuestCard = ({ id, title, category, difficulty, repeat }: QuestCardProps) => {
  const [isPending, startTransition] = useTransition();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ title, category, difficulty, repeat });

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this quest?")) {
      startTransition(() => {
        deleteQuest(id);
      });
    }
  };

  const handleUpdate = (formData: FormData) => {
    startTransition(() => {
      updateQuest(id, formData).then(() => setEditing(false));
    });
  };

  let difficultyLevel: string = ''

  switch (difficulty) {
    case 'SIMPLE':
      difficultyLevel = '⭐'
      break;
    case 'EASY':
      difficultyLevel = '⭐⭐'
      break;
    case 'MODERATE':
      difficultyLevel = '⭐⭐⭐'
      break;
    case 'HARD':
      difficultyLevel = '⭐⭐⭐⭐'
      break;
    case 'INSANE':
      difficultyLevel = '⭐⭐⭐⭐⭐'
      break;
  
    default:
      difficultyLevel = "N/A"
      break;
  }

  return (
    <div className="quest-card flex flex-col justify-between px-5 py-8 w-64 min-h-96 rounded-xl bg-purple-200 border  border-neutral-200">
      <div className="flex items-center justify-between mb-8">
        <h1 className='logo font-black'>Levelife</h1>
        <button onClick={() => setEditing(true)} className="border-2 border-transparent hover:border-black rounded-full p-1.5 transition-colors cursor-pointer"><Edit3 size={24} color="#000000" /></button>
      </div>
      <Image src={img} width={150} alt="shapes" className='mx-auto mb-10' />
      <h1 className='text-2xl font-bold mb-3'>{title}</h1>
      <hr className='border-neutral-600 mb-3' />
      {/* <p className='text-sm font-medium mb-3'>{category} task, its {difficulty} and repeat {repeat}</p> */}
      <div className="info mb-3">
        <p className='text-sm font-medium'>{category} task</p>
        <p className='text-sm font-medium'>Difficulty: {difficultyLevel}</p>
        <p className='text-sm font-medium'>Repeat {repeat}</p>
      </div>
      <hr className='border-neutral-600 mb-3' />
      <div className="action-buttons flex gap-1 font-black">
        <button onClick={handleDelete} disabled={isPending} className="flex-1 border p-2 rounded-lg cursor-pointer hover:bg-black hover:text-white hover:border-black transition-colors">Abandon</button>
        <button className='flex-1 border p-2 rounded-lg cursor-pointer hover:bg-black hover:text-white hover:border-black transition-colors'>Completed</button>
      </div>

      {/* Edit Modal */}
      {editing && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xl bg-opacity-50 flex items-center justify-center z-50">
          <form action={(formData) => handleUpdate(formData)} className="bg-white p-6 rounded shadow-xl w-[400px] space-y-4">
            <h3 className="text-lg font-semibold">Edit Quest</h3>

            <input name="title" defaultValue={form.title} placeholder="Title" required className="border p-2 w-full" />

            <select name="category" defaultValue={form.category} className="border p-2 w-full">
              <option value="LEARNING">Learning</option>
              <option value="FITNESS">Fitness</option>
              <option value="SELFCARE">Seflcare</option>
              <option value="SOCIAL">Social</option>
              <option value="FINANCE">Finance</option>
              <option value="CAREER">Career</option>
              <option value="CREATIVITY">Creativity</option>
              <option value="PRODUCTIVITY">Productivity</option>
              <option value="MISCELLANEOUS">Miscellaneous</option>
            </select>

            <select name="difficulty" defaultValue={form.difficulty} className="border p-2 w-full">
              <option value="SIMPLE">Simple</option>
              <option value="EASY">Easy</option>
              <option value="MODERATE">Moderate</option>
              <option value="HARD">Hard</option>
              <option value="INSANE">Insane</option>
            </select>

            <select name="repeat" defaultValue={form.repeat} className="border p-2 w-full">
              <option value="NONE">None</option>
              <option value="DAILY">Daily</option>
              <option value="WEEKLY">Weekly</option>
              <option value="MONTHLY">Monthly</option>
              <option value="YEARLY">Yearly</option>
            </select>

            <div className="flex justify-end gap-2 pt-2">
              <button type="button" onClick={() => setEditing(false)} className="px-4 py-2 bg-gray-200 rounded">
                Cancel
              </button>
              <button type="submit" disabled={isPending} className="px-4 py-2 bg-blue-600 text-white rounded">
                {isPending ? "Updating..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default QuestCard;
