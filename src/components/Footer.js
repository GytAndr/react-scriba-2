import "./Footer.css";
import Twitter from "../images/Twitter.png";
import Facebook from "../images/Facebook.png";
import Instagram from "../images/Instagram.png";
import LinkedIn from "../images/Linkedin.png";
import GitHub from "../images/GitHub.png";
export default function Footer() {
	return (
		<div className="footer">
			<img src={Twitter}></img>
			<img src={Facebook}></img>
			<img src={Instagram}></img>
			<img src={LinkedIn}></img>
			<img src={GitHub}></img>
		</div>
	);
}
