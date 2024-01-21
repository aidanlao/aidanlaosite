import Link from "next/link";
const Navbar = () => {
    return(
    <div className="navbar">
    <Link href="/">Home</Link>
    <Link href="/projects">Projects</Link>
    <Link href="/about">About</Link>
    <Link href="https://laopiano.ca">Piano</Link>
    </div>
    )
}
export default Navbar;