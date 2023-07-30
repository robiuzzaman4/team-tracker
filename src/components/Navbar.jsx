import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
    return (
        <header className="pt-6">
            <nav className="max-w-screen-md mx-auto px-4">
                <div className="flex items-center justify-between gap-2 bg-white rounded-xl shadow-grid p-4">
                    <Link
                        href="/"
                        className="shrink-0 font-medium">Team Tracker</Link>
                    <Link
                        href="/addMember"
                        className="shrink-0">
                        <Button>
                            Add New
                        </Button>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;