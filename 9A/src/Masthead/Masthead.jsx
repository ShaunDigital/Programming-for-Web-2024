import mastheadImg from "./Masthead.png"
import "./Masthead.css"
export default function Masthead() {
    return (
        <div className="masthead">
        <img  src={mastheadImg} alt="Shaun's Favorite Video Games"/>
        <h1>Shaun&apos;s Favorite Video Games</h1>
        </div>
    )
}