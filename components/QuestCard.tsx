"use client";

import React, { useState } from "react";
import { useTransition } from "react";

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
  const [showModal, setShowModal] = useState(false);
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

  return (
    <div className="border p-3">
      <h1>{title}</h1>
      <p>
        Category: {category}, Difficulty: {difficulty}, Repeat: {repeat}
      </p>
      <button onClick={() => setEditing(true)} className="bg-yellow-500 text-white px-3 py-1 rounded-full">Edit</button>
      <button onClick={handleDelete} disabled={isPending} className="bg-red-500 py-1 px-4 rounded-full cursor-pointer">
        {isPending ? "Deleting..." : "Delete"}
      </button>

      {/* Edit Modal */}
      {editing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
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
