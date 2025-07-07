"use client";

import React from "react";
import { useTransition } from "react";

// actions
import { deleteQuest } from "@/app/actions/deleteQuest";

type QuestCardProps = {
  id: string;
  title: string;
  category: string;
  difficulty: string;
  repeat: string;
};

const QuestCard = ({ id, title, category, difficulty, repeat }: QuestCardProps) => {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this quest?")) {
      startTransition(() => {
        deleteQuest(id);
      });
    }
  };

  return (
    <div className="border p-3">
      <h1>{title}</h1>
      <p>
        Category: {category}, Difficulty: {difficulty}, Repeat: {repeat}
      </p>
      <button onClick={handleDelete} disabled={isPending} className="bg-red-500 py-1 px-4 rounded-full cursor-pointer">
        {isPending ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
};

export default QuestCard;
