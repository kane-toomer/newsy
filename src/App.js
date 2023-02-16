import Footer from "./components/Footer/Footer";
import Navigation from "./components/Header/NavigationBar";

// Pages
import Home from "./components/Pages/Home";
import Business from "./components/Pages/Business";
import Entertainment from "./components/Pages/Entertainment";
import International from "./components/Pages/International";
import Opinion from "./components/Pages/Opinion";
import Politics from "./components/Pages/Politics";
import Sports from "./components/Pages/Sports";
import Technology from "./components/Pages/Technology";

// Authentication
import SignIn from "./components/Authentication/SignIn";
import AuthSelection from "./components/Authentication/AuthSelection";
import Register from "./components/Authentication/Register";

import { Route, Routes, Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Navigation />}>
					{/* Pages */}
					<Route index element={<Home />} />
					<Route path="/business" element={<Business />} />
					<Route path="/entertainment" element={<Entertainment />} />
					<Route path="/international" element={<International />} />
					<Route path="/opinion" element={<Opinion />} />
					<Route path="/politics" element={<Politics />} />
					<Route path="/sports" element={<Sports />} />
					<Route path="/technology" element={<Technology />} />
				</Route>
				{/* Authentication */}
				<Route path="/auth" element={<AuthSelection />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</>
	);
}

export default App;
