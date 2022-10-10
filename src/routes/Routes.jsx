import Login from '../pages/Login/Login'
import User from '../pages/User/User'

const routes = [
    {
        path: "/",
        component: Login,
    },

    {
        path: "/users",
        component: User,
    },

    {
        path: "/users/:id",
        component: User

    }
]

export default routes;