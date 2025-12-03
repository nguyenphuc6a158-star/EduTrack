import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "../presentation/appLayout"
import HomePage from "../../features/home/components"
import Users from "../../features/user/components"
import Exercises from "../../features/exercises/components"

const Router = () => {
	return(
		<BrowserRouter >
			<Routes>
				<Route path="/" element={<AppLayout />}>
					<Route index element={<HomePage />} />
					<Route path="users" element={<Users />} />
					<Route path="exercises" element={<Exercises />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
export default Router