
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import AddTasks from "../../Pages/AddTasks/AddTasks";
import MyTasks from "../../Pages/MyTasks/MyTasks";
import CompletedTasks from "../../Pages/CompletedTasks/CompletedTasks";






const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addTask',
                element:<AddTasks></AddTasks>
            },
            {
                path: '/myTasks',
                element: <MyTasks></MyTasks>
            },
            {
                path: '/completedTasks',
                element: <CompletedTasks></CompletedTasks>
            },

        ]
    }
])

export default router