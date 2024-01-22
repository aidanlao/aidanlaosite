import Link from "next/link";
const Navbar = ({ number }) => {
    let classes = ["","",""];
    classes[number] = "active";
    return(
    <div className="navbar">
    <Link className={classes[0]} href="/">Home</Link>
    <Link className={classes[1]} href="/projects">Projects</Link>
    <Link className={classes[2]} href="/about">About</Link>
    </div>
    )
}
export default Navbar;