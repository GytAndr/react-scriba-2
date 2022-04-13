import "./Info.css";
import Mail from "../images/Mail.png";
import About from "./About";
import Interests from "./Interests";

export default function Info() {
	return (
		<div className="info">
			<h2 className="info--name">Laura Smith</h2>
			<p className="info--position">Frontend Developer</p>
			<p className="info--email">laurasmith.website</p>
			<button className="info--btn">
				<img className="info--img" src={Mail} />
				Email
			</button>
			<About />
			<Interests />
		</div>
	);
}
