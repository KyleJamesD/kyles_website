import 'bootstrap/dist/css/bootstrap.min.css';

import './Header.css'; // Add your custom styles here
import { useState } from "react";


const PillsHeader = () => {

    const navItems = [
        { label: 'Home' },
        { label: 'Projects' },
        { label: 'About' },
        { label: 'Contact' }
      ];

      const [active, setActive] = useState('Home'); // default to 'Home'

    return (
            <div className='navbarouter'>
                <div className='pill-outer' >
                {
                    navItems.map(item => (
                        <button
                            key={item.label}
                            // className={'button-nav'} OR {button-nav active} 
                            className={`button-nav${active === item.label ? ' active' : ''}`}
                            onClick={() => setActive(item.label)}
                        >
                            {item.label}
                        </button>
                    ))
                }  
                </div>
            </div>

    );
}

export default PillsHeader;