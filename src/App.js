
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/header'
import FeedbackList from './components/feedback_list';
import FeedBackStats from './components/FeedBack';
import FeedbackForm from './components/FeedbackForm';
import  Aboutpage from './pages/Aboutpage';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutIconLink from './components/AboutIconLink';
function App()
{ 
    return (
    <FeedbackProvider>
    <Router>
    <Header />
    <div className="container">
    <Routes>
    <Route exact path='/' element={
        <>
        <FeedbackForm />
        <FeedBackStats />
        <FeedbackList />
        </>
    }>
    </Route>
    <Route path='/about' element={<Aboutpage />}/>
    </Routes>
   </div>
   <AboutIconLink />
    </Router>
    </FeedbackProvider>)
} 
export default App