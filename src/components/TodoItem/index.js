// Write your code here
import './index.css'

const TodoItem = props => {
  const {id, title, deleteuser} = props
  const rem = () => {
    deleteuser(id)
  }
  return (
      <ul>
    <div className="bg1">
      <p>{title}</p>
      <button onClick={rem} className="but">
        Delete
      </button>
    </div>
    </ul>
  )
}

export default TodoItem
