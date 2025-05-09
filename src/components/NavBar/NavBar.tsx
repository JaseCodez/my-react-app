import './NavBar.css'

function NavBar() {
    return (
        <nav className='nav'>
            <a href='/' id='jason'>Jason Phan</a>
            <ul >
                <li className='item'>
                    <a href='/Home'>Home</a>
                </li>
                <li className='item'>
                    <a href='/About'>About Me</a>
                </li>
                <li className='item'>
                    <a href='/Projects'>Projects</a>
                </li>
                <li className='item'>
                    <a href='CV'>CV</a>
                </li>
                <li className='item'>
                    <a href='/Gym Schedule'>Gym Schedule</a>
                </li>
                <li className='item'>
                    <a href='/Contact'>Contact</a>
                </li>

            </ul>

        </nav>
    );
}

export default NavBar;