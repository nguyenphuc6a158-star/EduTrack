import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "../presentation/appLayout"
import itemsMenu from "../presentation/appLayout/navigator/menuItem"
const Router = () => {
	return(
		<BrowserRouter >
			<Routes>
				<Route path="/" element={<AppLayout />}>
					{itemsMenu.map(item => {
						const isIndex = item.key === '/';
						return (
							<Route
								key={item.key}
								path={item.key}
								index={isIndex}
								element={<item.components />}
							/>
						);
					})}
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
export default Router