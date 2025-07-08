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
    <div style={{ backgroundImage: "url('/assets/bg.gif')" }} className="bg-fixed bg-cover bg-center flex flex-col justify-center items-center">
      <div className="min-w-7xl max-w-7xl my-12">
        <h1 className="text-7xl text-white mb-10">Found a new conquest?</h1>
        <Form action={createQuest} className="w-2/5 max- p-3 mb-20 bg-white px-6 py-10">
        <div className="flex flex-col mb-3">
          <label className="text-2xl">Title</label>
          <input type="text" name="title" id="title" required className="border border-neutral-500 rounded-lg px-3 py-2" />
        </div>
        <div className="flex flex-col mb-3">
          <label className="text-2xl">Categoy</label>
          <select name="category" id="category" className="border border-neutral-500 rounded-lg px-3 py-2">
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
          <label className="text-2xl">Difficulty</label>
          <select name="difficulty" id="difficulty" className="border border-neutral-500 rounded-lg px-3 py-2">
            <option value="SIMPLE">Simple</option>
            <option value="EASY">Easy</option>
            <option value="MODERATE">Moderate</option>
            <option value="HARD">Hard</option>
            <option value="INSANE">Insane</option>
          </select>
        </div>
        <div className="flex flex-col mb-6">
          <label className="text-2xl">Repeat</label>
          <select name="repeat" id="repeat" className="border border-neutral-500 rounded-lg px-3 py-2">
            <option value="NONE">None</option>
            <option value="DAILY">Daily</option>
            <option value="WEEKLY">Weekly</option>
            <option value="MONTHLY">Monthly</option>
            <option value="YEARLY">Yearly</option>
          </select>
        </div>
        <button type="submit" className="bg-black text-white px-3 py-3 rounded-lg cursor-pointer w-full">
          Activate Quest
        </button>
      </Form>
      <h1 className="text-7xl text-white mb-10">Here are your active quests:</h1>
      <div className="quests flex flex-wrap gap-5">
        {quests.map((quest) => (
          <QuestCard key={quest.id} id={quest.id} title={quest.title} category={quest.category} difficulty={quest.difficulty} repeat={quest.repeat} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default page;
