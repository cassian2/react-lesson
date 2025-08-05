import { Outlet } from "react-router-dom";
import CartList from "../components/CartList";

export const PageLayout = () => {
    return (
        <div className="flex">
            <div className="w-64">
                <CartList />
            </div>
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
}