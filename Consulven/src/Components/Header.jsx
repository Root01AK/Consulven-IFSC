import {assets} from "../assets/assets.js"

const Header = ({title, para, image}) => {
  return (
    <div className='header'>
      <img src={image} alt="" />
      <img src={assets.about_overlap} className='headerOverlap' alt="" />
      <div className='headerContent'>
        <h1>{title}</h1>
        <p>{para}</p>
      </div>
    </div>
  )
}

export default Header
