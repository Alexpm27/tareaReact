import lo from '../assets/images/cazadores-restaurant.svg'
import '../assets/styles/headerStyle.css'

function Header() {
    return ( 
        <header>
            <div className='Logo'>
                <img src={lo} alt="Logo" />
            </div>
            <div className='container-input'>
                <input type="text" placeholder='Buscador'/>
            </div>
        </header>
     );
}

export default Header;