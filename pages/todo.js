import { useState } from 'react'
import styles from '../styles/Todo.module.css'
 
const Todo = () => {
 
   const [tasks, setTasks] = useState([
       { id: 1, name: 'Santi' , Lname: 'Rittjan' , Student: '5935512018' },])
 
   const [name, setName] = useState('')

   const [Lname, setLname] = useState('')

   const [Student, setStudent] = useState('')
 
   const [idEdit, setIdEdit] = useState(0)
 
   const renderTasks = () => {
       if (tasks !== null)
           return tasks.map((task, index) => (
               <li key={index} className={styles.listItem}>
                   {index+1})
                   {(idEdit !== task.id) ?
                       task.name :
                       (<input
                           className={styles.text}
                           type="text"
                           name="name"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                       />)
                   }
                   &nbsp;&nbsp;&nbsp;&nbsp;
                   {(idEdit !== task.id) ?
                       task.Lname :
                       (<input
                           className={styles.text}
                           type="text"
                           Lname="Lname"
                           value={Lname}
                           onChange={(e) => setLname(e.target.value)}
                       />)
                   }
                   &nbsp;&nbsp;&nbsp;&nbsp;
                   {(idEdit !== task.id) ?
                       task.Student :
                       (<input
                           className={styles.text}
                           type="text"
                           Student="Student"
                           value={Student}
                           onChange={(e) => setStudent(e.target.value)}
                       />)
                   }
                   <div className={styles.buttonContainer}>
                       <button
                           className={`${styles.button} ${styles.btnEdit}`}
                           onClick={() => editTask(task.id)}>
                           Edit
                       </button>
                       <button
                           className={`${styles.button} ${styles.btnDelete}`}
                           onClick={() => deleteTask(task.id)}>
                           Delete
                       </button>
                   </div>
               </li>))
   }
 
   const editTask = (id) => {
       setIdEdit(id)
       let t = tasks.find((task) => +task.id === +id)
       setName(t.name)
       setName(t.Lname)
       setName(t.Student)
       if (+idEdit === +id) { //Press Edit again
           let newTasks = tasks.map((task, index) => {
               if (+task.id === +id)
               tasks[index].name = name
               tasks[index].name = Lname
                tasks[index].Student = Student
               return task
           })
           setTasks(newTasks)
           setIdEdit(0)
       }
   }
 
   const deleteTask = (id) => {
       console.log('delete id: ', id)
       let newTasks = tasks.filter((task) => task.id !== +id)
       setTasks(newTasks)
   }
 
   const addTask = (name,Lname,Student) => {
       if((tasks.length) < 10 && +name !== 0){
        setTasks([...tasks, { id: tasks[tasks.length - 1].id + 1, name, Lname, Student }])
        console.log(tasks)
       }
       else{
        console.log("More than 10 task")
       }
   }
 
   return (
       <div className={styles.container}>
           <h1 className={styles.title}>Data</h1>
 
           <div className={styles.m}>
               Name &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
               <input
                   className={styles.text}
                   type="text"
                   name="addTask"
                   onChange={(e) => (setName(e.target.value))}
               />
           </div> 
           <div className={styles.m}>
               Last Name &nbsp;&nbsp;&nbsp;&nbsp;
               <input
                   className={styles.text}
                   type="text"
                   name="addTask"
                   onChange={(e) => (setLname(e.target.value))}
               />
           </div>
           <div className={styles.m}>
               Student ID &nbsp;&nbsp;&nbsp;&nbsp;
               <input
                   className={styles.text}
                   type="text"
                   Student="addTask"
                   maxlength="10"
                   onChange={(e) => (setStudent(e.target.value))}
               />
               
           </div>
           <div className="addContainer">
               <button
                   className={`${styles.button} ${styles.btnAdd}`}
                   onClick={() => addTask(name,Lname,Student)}>Add</button>
           </div>
           <ul className={styles.list}>
               {renderTasks()}
           </ul>
       </div>
       
   )
}
 
export default Todo