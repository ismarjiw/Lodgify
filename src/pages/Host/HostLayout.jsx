// import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {
    // const activeStyles = {
    //     fontWeight: "bold",
    //     textDecoration: "underline",
    //     color: "#161616"
    // }

    return (
        <>
            <Outlet />
        </>
    )
}