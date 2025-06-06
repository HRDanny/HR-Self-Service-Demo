
'use client'
import { useState } from 'react';

export default function Workflow() {
  const [steps, setSteps] = useState([
    { task: 'Introductievideo bekijken', completed: false },
    { task: 'Account instellen', completed: false },
    { task: 'Verklaring ondertekenen', completed: false },
  ]);

  const toggleStep = (index: number) => {
    const newSteps = [...steps];
    newSteps[index].completed = !newSteps[index].completed;
    setSteps(newSteps);
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Workflow voortgang</h1>
      <ul className="space-y-2">
        {steps.map((step, idx) => (
          <li key={idx} className="flex items-center">
            <input
              type="checkbox"
              checked={step.completed}
              onChange={() => toggleStep(idx)}
              className="mr-2"
            />
            <span className={step.completed ? 'line-through text-gray-500' : ''}>{step.task}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
