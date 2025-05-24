import { Outlet, Link } from "react-router-dom";

export default function UserLayout(){
    return (<>
        <div>
            <nav className="bg-blue-600 p-4 text-white">
                <Link to="/" className="mr-4">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        <main className="p-4">
            <Outlet /> {/* This renders the child route's component */}
        </main>
    </div>

        
    </>);
}