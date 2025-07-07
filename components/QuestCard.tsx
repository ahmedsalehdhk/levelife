import React from 'react'

type QuestCardProps = {
  id: string;
  title: string;
  category: string;
  difficulty: string;
  repeat: string;
};

const QuestCard = ({ title, category, difficulty, repeat }: QuestCardProps) => {
  return (
    <div className='border p-3'>
        <h1>{title}</h1>
        <p>Category: {category}, Difficulty: {difficulty}, Repeat: {repeat}</p>
    </div>
  )
}

export default QuestCard
