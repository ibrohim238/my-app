import {Outlet} from "react-router-dom";

export default function DefaultLayout() {
    return (
        <div>
            Layout
            <Outlet />
        </div>
    )
}