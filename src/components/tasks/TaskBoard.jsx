import { useState } from "react";
import SearchTask from "../SearchTask";
import TaskActions from "./TaskActions";
import TaskLists from "./TaskList";
import AddTask from "./AddTask";

const defaultTask ={
  id: crypto.randomUUID(),
  title: 'Integration Api',
  description: "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
  tags: ['web', 'python', 'Java'],
  priority: 'High',
  isFavorite: false
}
export default function TaskBoard() {
  const [tasks, setTasks] = useState([defaultTask])
  const [showAddTask, setShowAddTask] = useState(false)
  function handleAddTask(willAdd){
    setShowAddTask(willAdd);
  }
  return (
    <section className="mb-20" id="tasks">
      {showAddTask && <AddTask/>}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask/>
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions handleAddTask={handleAddTask}/>
          <TaskLists
            tasks={tasks}
          />
        </div>
      </div>
    </section>
  );
}
