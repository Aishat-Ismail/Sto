import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/dash/Dashboard";
import Inventory from "./pages/inventory/Inventory";
import LogOut from "./pages/LogOut";
import Manage from './pages/manage/Manage';
import Reports from "./pages/reports/Reports";
import Settings from './pages/Settings';
import Orders from "./pages/orders/Orders";
import Suppliers from "./pages/suppliers/Suppliers";
import UserLayout from "./layout/UserLayout";
import Landing from "./components/landing/Landing";
import Login from "./authentication/login/Login";
import Create from "./authentication/create/CreateAccount";
// import Suppliers from "./pages/Suppliers";



const Router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />
    },

    {
        path: "/login",
        element: <Login />
    },

    {
        path: "/register",
        element: <Create />
    },
    {
        path: "*",
        element: 'Page Not Found'
    },
    {
        path: "/home",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "/home/inventory",
                element: <Inventory />
            },
            {
                path: "/home/logout",
                element: <LogOut />
            },

            {
                path: "/home/manage",
                element: <Manage />
            },

            {
                path: "/home/orders",
                element: <Orders />
            },

            {
                path: "/home/reports",
                element: <Reports />
            },

            {
                path: "/home/settings",
                element: <Settings />
            },

            {
                path: "/home/suppliers",
                element: <Suppliers />
            },

            {
                path: "home/*",
                element: 'Page Not Found'
            }
        ]
    },

    // {
    //     path: "/home",
    //     element: <MainLayout />,
    //     children: [
    //         {
    //             index: true,
    //             element: <Dashboard />
    //         },

    //         // {
    //         //     path: "/inventory",
    //         //     element: <Inventory />
    //         // },

    //         {
    //             path: "/logout",
    //             element: <LogOut />
    //         },

    //         {
    //             path: "/manage",
    //             element: <Manage />
    //         },

    //         {
    //             path: "/orders",
    //             element: <Orders />
    //         },

    //         {
    //             path: "/reports",
    //             element: <Reports />
    //         },

    //         {
    //             path: "/settings",
    //             element: <Settings />
    //         },

    //         {
    //             path: "/suppliers",
    //             element: <Suppliers />
    //         },

    //         {
    //             path: "*",
    //             element: 'Page Not Found'
    //         }
    //     ]
    // }


])
export default Router