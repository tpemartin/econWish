
import Image from "mui-image"
import "./index.css"
import PostalStamp from "./PostalStamp"

export default function PostedStamp({ imgSrc }) {
  return (
    <div className="stamp-holder">
      <Stamp imgSrc={imgSrc} />
      <PostalStamp />
    </div>
  )
}
function Stamp({ imgSrc }) {
  return (
    <div className="stamp">
      <Image
        duration={0}
        src={imgSrc}
      />
    </div>

  )
}