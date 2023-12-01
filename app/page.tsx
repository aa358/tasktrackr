'use client'
import Hero from "@/components/Hero";
import { useState } from 'react'

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim() !== '') {
      const newTask: Task = { id: tasks.length + 1, text: taskText, completed: false };
      setTasks([...tasks, newTask]);
      setTaskText('');
    }
  };

  const completeTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  return (
    <div>
      <Hero />
      <div className="container mx-auto mt-10">
        {/* Task Input Form */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Add a new task..."
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            className="border p-2 w-3/4"
          />
          <button onClick={addTask} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
            Add Task
          </button>
        </div>

        {/* Task List */}
        <ul className="grid gap-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex items-center justify-between p-4 border rounded ${
                task.completed ? 'bg-gray-200' : ''
              }`}
            >
              <span
                onClick={() => completeTask(task.id)}
                className={`cursor-pointer ${task.completed ? 'line-through' : ''}`}
              >
                {task.text}
              </span>
              <button
                onClick={() => deleteTask(task.id)}
                className="ml-2 px-3 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
