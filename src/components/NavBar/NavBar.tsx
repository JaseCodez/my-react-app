import './NavBar.css'

function NavBar() {
    return (
        <div className='navbar'>
            <h1>Jason Phan</h1>
            <ul className='navmenu'>
                <button className='nav'>Home</button>
                <button className='nav'>About Me</button>
                <button className='nav'>Projects</button>
                <button className='nav'>CV</button>
                <button className='nav'>Gym Schedule</button>
                <button className='nav'>Contacts</button>

            </ul>

        </div>
    );
}

export default NavBar;