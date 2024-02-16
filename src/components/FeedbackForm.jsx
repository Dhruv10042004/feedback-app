import { useState } from "react";
import {useContext,useEffect} from 'react'
import FeedbackContext from "../context/FeedbackContext";
import Card from "./shared/card"
import Button from "./shared/button";
import RatingSelect from "./RatingSelect";
function FeedbackForm() {
  const {addFeedback,feedbackEdit,updateFeedback}=useContext(FeedbackContext)
    const [text,setText]=useState('')
    const [rating,setRating]=useState(10)
    const [btnDisabled,setBtnDisabled]=useState(true)
    const [message,setMessage]=useState('')
    useEffect(()=>{
      if(feedbackEdit.edit===true)
      {
        setBtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
      }
    },[feedbackEdit])
    const handleTextChange=(e)=>{
      if(text===''){
        setBtnDisabled(true)
        setMessage(null)
      }
       else if(text!==''&& text.trim().length<=10){
       
       setMessage('Text must be atleast 10 charcters')
       setBtnDisabled(true)
      }
      else 
      {
        setMessage(null)
        setBtnDisabled(false)
      }
      setText(e.target.value)
    }
    const handleSumbit=(e)=>{
      e.preventDefault()
      if(text.trim().length>10)
      { const Feedback={
        rating,
        text
      }
      if(feedbackEdit.edit ===false)
      {
      addFeedback(Feedback)
      
      }
      else
      {
        updateFeedback(feedbackEdit.item.id,Feedback)
      }
      setText('')
    }
    }
  return (
    <Card>
        <form onSubmit={handleSumbit}>
         <h2>How would you rate your service with us?</h2>
         <RatingSelect select={(rating)=>{setRating(rating)}} />
         <div className="input-group">          
            <input onChange={handleTextChange} type="text" placeholder="Write A Review" required value={text}/>
            <Button type="submit" isDisabled={btnDisabled}>Submit</Button>
         </div>
         {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}
export default FeedbackForm