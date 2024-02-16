import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext';
function FeedBackStats() {
  const {feedback} = useContext(FeedbackContext)
    let avgrat=feedback.reduce((acc,cur)=>
    {return acc+cur.rating},0)/feedback.length;
    avgrat=avgrat.toFixed(1);
  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating:{isNaN(avgrat)?0:avgrat}
        </h4>
    </div>
  )
}
export default FeedBackStats
