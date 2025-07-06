import React from 'react'
import Form from 'next/form'

const page = () => {
  return (
    <div>
      <Form action='' className='w-1/4 bg-cyan-200 p-3'>
        <div className="flex flex-col mb-3">
          <label className=''>Title</label>
          <input type="text" name='title' id='title' required className='border border-neutral-500 rounded-full p-1' />
        </div>
        <div className="flex flex-col mb-3">
          <label className=''>Categoy</label>
          <select name="category" id="category" className='border border-neutral-500 rounded-full p-1'>
            <option value="learning">Learning</option>
            <option value="fitness">Fitness</option>
            <option value="selfcare">Seflcare</option>
            <option value="social">Social</option>
            <option value="finance">Finance</option>
            <option value="career">Career</option>
            <option value="creativity">Creativity</option>
            <option value="productivity">Productivity</option>
            <option value="miscellaneous">Miscellaneous</option>
          </select>        
        </div>
        <div className="flex flex-col mb-3">
          <label className=''>Difficulty</label>
          <select name="difficulty" id="difficulty" className='border border-neutral-500 rounded-full p-1'>
            <option value="simple">Simple</option>
            <option value="easy">Easy</option>
            <option value="moderate">Moderate</option>
            <option value="hard">Hard</option>
            <option value="insane">Insance</option>
          </select>        
        </div>
        <div className="flex flex-col mb-3">
          <label className=''>Repeat</label>
          <select name="repeat" id="repeat" className='border border-neutral-500 rounded-full p-1'>
            <option value="none">None</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monhtly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>        
        </div>
        <button type="submit" className='bg-black text-white p-2 rounded-full cursor-pointer'>Submit</button>
      </Form>
    </div>
  )
}

export default page
