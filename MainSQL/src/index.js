import React from 'react'
import ReactDOM from 'react-dom'
import Feedback from '../src/OtherComps/Feedback'
import Phonebook from '../src/OtherComps/Phonebook'
import Reminder from './OtherComps/Reminder'



const App = () => {
  
  const phonebook = {
    name: 'Superadvanced phonebook app',
    contacts: [
      {
        name: 'MNO',
        phonenumber: '0770',
        id: 1
      },
      {
        name: 'ZETA',
        phonenumber: '0771',
        id: 2
      },
      {
        name: 'NVA',
        phonenumber: '0750',
        id: 3
      }
    ]
  }


  return (
    <div>
      <Phonebook phonebook={phonebook}/>
      <Feedback />
      <Reminder />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)