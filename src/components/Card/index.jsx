import "./index.css"
import "./wish.css"
import PostedStamp from "../PostedStamp"

export default function Card({ user, style }) {
  const { name, grade, imgSrc, wish } = user
  return (

    <div className="card" style={style}>
      <div className="card-content">
         <Sender name={name} grade={grade}/>
         <PostedStamp imgSrc={imgSrc}/>
         <Wish wish={wish}/>
      </div>
    </div>

  )
}

function Sender({name, grade}){
  return(
   <div className="sender">
  <div className="label text-shadow">Sender:</div>
  <div className="sender-info">
    <div className="sender-name">
      <div className="sender-name-text text-shadow">{name}</div>
    </div>
    <div className="sender-grade">
      <div className="sender-grade-text text-shadow">{grade}</div>
    </div>
  </div>
</div>

  )
}

function Wish({wish}){
  return(
    <div className="wish">
          <div className="right-quotation">”</div>
          <div className="left-quotation">“</div>
          <div className="wish-text">{wish}</div>
        </div>
  )
}