import { useState } from "react";
import SearchTask from "../SearchTask";
import TaskActions from "./TaskActions";
import TaskLists from "./TaskList";
import AddTask from "./AddTask";

const defaultTask = {
  id: crypto.randomUUID(),
  title: "Integration Api",
  description:
    "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
  tags: ["web", "python", "Java"],
  priority: "High",
  isFavorite: false,
};
export default function TaskBoard() {
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddTask, setShowAddTask] = useState(false);

  const [toUpdate, setToUpdate] = useState(null);
  
  // to toggle addTask btn
  function handleAddTask(willAdd) {
    setShowAddTask(willAdd);
  }
  // to submit a task
  function onSave(newTask, isAdd) {
    if(isAdd){
      setTasks([...tasks, newTask]);
    }else{
      setTasks(tasks.map(task => {
        if(task.id === newTask.id){
          return newTask;
        }else{
          return task;
        }
        
      }))
      setToUpdate(null);
    }
    
    setShowAddTask(false);
  }
  // edit a task
  function handleEdit(task) {
    
    setToUpdate(task);
    setShowAddTask(true);
  }
  // to cancel the prop 
  function onCancel(){
    setShowAddTask(false);
    setToUpdate(null);
  }
  return (
    <section className="mb-20" id="tasks">
      {showAddTask && (
        <AddTask
          onSave={onSave}
          toUpdateTask={toUpdate}
          onCancel={onCancel}
        />
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions handleAddTask={handleAddTask} />
          <TaskLists tasks={tasks} onEdit={handleEdit} />
        </div>
      </div>
    </section>
  );
}
