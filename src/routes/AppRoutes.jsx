import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import routes from "./Routes"

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            {routes.map((item, i) => (
                <Route
                    key={i}
                    path={item.path}
                    element={<item.component/>}
                />
            ))
            }
        </Routes>
    </Router>
  )
}

export default AppRouter;