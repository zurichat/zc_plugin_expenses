import React from "react"
const Form = () => {
  return(
    <div>
     
      <form>
        <div className ='box'>
          <label htmlfor="comments">Comments </label>
          <button className = "btn2"><span>&times;</span></button>
        </div>
        
       <textarea id="story" name="comments"
         rows="1" cols="25" placeholder ="Give reasons for declining">
           </textarea>
        <div className="card_btn">
          <button className="btn">No, go back</button>
          <button className="btn  accept">Yes, Decline</button>

        </div>
  
      </form>
  </div>
  )
}
export default Form

//main
//by kihuni