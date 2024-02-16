import { v4 as uuid} from 'uuid'
import { createContext,useState } from "react"
const FeedbackContext =createContext()
export const FeedbackProvider =({children})=>{
    const [feedback,setfeedback] = useState([
        {
            id: 1,
            text:'This item is from context',
            rating :10
        }
    ])
    const [feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit:false
    })
    const editFeedback =(item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })
    }
    const updateFeedback=(id,updItem)=>{
        setfeedback(feedback.map((item)=> 
        (item.id===id ?{...item,...updItem}:item)
        ))
    }
    const deleteFeedback=(id)=>{
        if(window.confirm('Are you sure you want to delete?')){
            setfeedback(feedback.filter((item)=>item.id!==id))
        }   
}
const addFeedback=(newFeedBack)=>{
    if(window.confirm('Are you sure you want to add?')){
       newFeedBack.id=uuid()
       setfeedback([newFeedBack,...feedback])
    }   
    console.log(feedback)
} 
    return <FeedbackContext.Provider value={{
    feedback,
    deleteFeedback,
    addFeedback,
    editFeedback,
    feedbackEdit,
    updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext