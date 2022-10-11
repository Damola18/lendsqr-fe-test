import Login from '../pages/Login/Login'
import User from '../pages/User/User'
import UserDetail from '../pages/UserDetail/UserDetail';

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
        path: "/userdetail",
        component: UserDetail

    }
]

export default routes;