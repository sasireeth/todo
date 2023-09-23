import {Component} from 'react'

import './index.css'

import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {TodosList: initialTodosList}

  deleteuser = id => {
    const {TodosList} = this.state
    const updt = TodosList.filter(each => each.id !== id)
    this.setState({TodosList: updt})
  }

  render() {
    const {TodosList} = this.state
    return (
      <div className="bg">
        <div className="con">
          <h1>Simple Todos</h1>
          <ul>
          {TodosList.map(each => (
            <TodoItem
              id={each.id}
              title={each.title}
              deleteuser={this.deleteuser}
            />
          ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
