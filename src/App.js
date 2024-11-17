import './App.css';
import toDoList from './components/toDoList/ToDoList';
import styles from './components/toDoList/ToDoList.module.css';
function App() {
  return (
   toDoList.map( el => {
    return(
      <div className={styles.container}>
        <div key={el.name} className={styles.cards}>
        <h2>{el.name}</h2>
        <p className={styles.deadline}>{el.deadline}</p>
        <p>{el.describe}</p>
      </div>
      </div>
      
    )
   })
  );
}

export default App;
