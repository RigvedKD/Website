import Student from './Student.jsx'
function App() {
  return(
    <>
      <Student name = "Rigved" age = {22} isStudent = {true}></Student>
      <Student name = "Vareun" age = {22} isStudent = {false}></Student>
      <Student name = "Sarah" age = {23} isStudent = {true}></Student>
      <Student name = "someone" age = {23} isStudent = {true}></Student>
      <Student name = "someo1ne"></Student>
    </>
  )
}

export default App
