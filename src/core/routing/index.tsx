import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../../features/homePage/components"
import AboutPage from "../../features/aboutPage/components"
import ContactPage from "../../features/contactPage/components"
import AppLayout from "../presentation/appLayout"

const Router = () => {
	return(
		<BrowserRouter >
			<Routes>
				<Route path="/" element={<AppLayout />}>
					<Route index element={<HomePage />} />
					<Route path="about" element={<AboutPage />} />
					<Route path="contact" element={<ContactPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
export default Router