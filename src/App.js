import "./App.css";
import Footer from "./components/Footer";
import Info from "./components/Info";
import image from "./images/face.png";
export default function App() {
	return (
		<div className="app center">
			<div className="card">
				<img src={image} />
				<Info />
				<Footer />
			</div>
		</div>
	);
}
