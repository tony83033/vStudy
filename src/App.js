import React,{useState} from 'react'
import Sidebar from './component1/sidebar/Sidebar'
import Topbar from './component1/topbar/Topbar'
import Hamburger from './component1/topbar/Menu'
import Quiz_dashboard from './component1/quizzes/quiz_dashboard';
import Add_new from './component1/Add_new/Add_new';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Appstate from './context/appwriteState';

const App = () => {
  const [bar,Setbar]=useState(true)

  return (
    <div>
      {/* <Hamburger bar={bar} Setbar={Setbar}/> */}
      <Appstate>
      <Router>
      <Routes>
        <Route path='/' element={<Topbar bar={bar} Setbar={Setbar}/>}/>
        <Route path='dashboard/add_quiz' element={<Add_new/>}/>
        <Route path='dashboard' element={<Quiz_dashboard/>}/>
      </Routes>
      </Router>
      </Appstate>
      </div>
  )
}

export default App