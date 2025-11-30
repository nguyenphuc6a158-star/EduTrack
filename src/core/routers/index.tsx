import { BrowserRouter, Route, Routes } from "react-router-dom"
import SiderNavbar from "../components/navigator"
import HomePage from "../../features/homePage/components"
import AboutPage from "../../features/aboutPage/components"
import ContactPage from "../../features/contactPage/components"
import { Row } from "antd"

const Router = () => {
	return(
		<Row>
			<BrowserRouter >
				<SiderNavbar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/contact" element={<ContactPage />} />
				</Routes>
			</BrowserRouter>
		</Row>
	)
}
export default Router