import Footer from "./components/Footer/Footer";
import Navigation from "./components/Header/NavigationBar";
import Home from "./components/Pages/Home";
import ArticlePressed from "./components/Pages/ArticlePressed";
import SignIn from "./components/Authentication/SignIn";
import AuthSelection from "./components/Authentication/AuthSelection";

function App() {
	return (
		<>
			{/* <Navigation />
			<ArticlePressed />
			<Footer /> */}
			<SignIn />
		</>
	);
}

export default App;
