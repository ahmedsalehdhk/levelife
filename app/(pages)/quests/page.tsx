import React from "react";
import Form from "next/form";
import { prisma } from "@/lib/prisma";

// components
import QuestCard from "@/components/QuestCard";

// actions
import { createQuest } from "@/app/actions/createQuest";

const page = async () => {

  const quests = await prisma.quest.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <Form action={createQuest} className="w-1/4 bg-cyan-200 p-3 mb-3">
        <div className="flex flex-col mb-3">
          <label className="">Title</label>
          <input type="text" name="title" id="title" required className="border border-neutral-500 rounded-full p-1" />
        </div>
        <div className="flex flex-col mb-3">
          <label className="">Categoy</label>
          <select name="category" id="category" className="border border-neutral-500 rounded-full p-1">
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
        </div>
        <div className="flex flex-col mb-3">
          <label className="">Difficulty</label>
          <select name="difficulty" id="difficulty" className="border border-neutral-500 rounded-full p-1">
            <option value="SIMPLE">Simple</option>
            <option value="EASY">Easy</option>
            <option value="MODERATE">Moderate</option>
            <option value="HARD">Hard</option>
            <option value="INSANE">Insane</option>
          </select>
        </div>
        <div className="flex flex-col mb-3">
          <label className="">Repeat</label>
          <select name="repeat" id="repeat" className="border border-neutral-500 rounded-full p-1">
            <option value="NONE">None</option>
            <option value="DAILY">Daily</option>
            <option value="WEEKLY">Weekly</option>
            <option value="MONTHLY">Monthly</option>
            <option value="YEARLY">Yearly</option>
          </select>
        </div>
        <button type="submit" className="bg-black text-white p-2 rounded-full cursor-pointer">
          Submit
        </button>
      </Form>
      <hr className="mb-3" />
      <div className="quests flex flex-wrap gap-5 p-5">
        {quests.map((quest) => (
          <QuestCard key={quest.id} id={quest.id} title={quest.title} category={quest.category} difficulty={quest.difficulty} repeat={quest.repeat} />
        ))}
      </div>
    </div>
  );
};

export default page;
