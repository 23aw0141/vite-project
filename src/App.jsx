import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [task, setTask] = useState([]); //配列、タスク全体を管理するステート
const [newTask, setNewTask] = useState(''); //文字列、新しいタスクを追加する時のステート

const handleChange = (event) => {
  setNewTask(event.target.value)
}
const handleAddTask =() =>{
 if(newTask.trim() !==''){
  setTask((prevTask)=>[...prevTask, newTask])
  setNewTask('');
 } //not equal 沒有空白 trim:檢查前後有無空白
}
const handleResetTask = () =>setTask([]);
  return (
    <>
    <h1>Todoリスト</h1>
    <ul>
      {task.map((list, index)=>(
        <li key={index}>{list}</li>
      ))}
    </ul>
    <input
    type="text"
    placehorder='新しいタスクを入力してください' //html
    value={newTask} 
    onChange={handleChange} />
    <button onClick={handleAddTask}>追加</button>
    <button onClick={handleResetTask}>リセット</button>
</>
  )
}

export default App
