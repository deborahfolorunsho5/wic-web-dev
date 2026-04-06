const NavBar = () => {
    return (
        <nav className = "w-full flex justify-center py-6" >
            <div className = "flex gap-40 border-2 rounded-full px-8 ">
                <a href = "#Home" className = "hover:opacity-70"> Home</a>
                <a href = "#about" className = "hover:opacity-70">About</a>
                <a href = "#projects" className = "hover:opacity-70">Projects</a>
                <a href = "#contact" className = "hover:opacity-70" >Contact</a>
            </div>
            
        </nav>
    )
}
export default NavBar
