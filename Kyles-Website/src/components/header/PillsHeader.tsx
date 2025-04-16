import 'bootstrap/dist/css/bootstrap.min.css';

import './Header.css'; // Add your custom styles here
import { useState } from "react";


const PillsHeader = () => {

    const navItems = [
        {name:'Home', label: 'home', targetId: 'home' },
        { name:'Projects', label: 'projects' , targetId: 'projects'},
        {name:'About', label: 'about', targetId: 'about' },
        { name:'Contact', label: 'contact', targetId: 'contact' }
      ];

      const [active, setActive] = useState('home'); // default to 'Home'
    // Called when a nav button is clicked
    const handleNavClick = (targetId: string) => {
        // Find the section
        const section = document.getElementById(targetId);
        if (section) {
        // Scroll to it smoothly, with a slight offset for the navbar height
        const yOffset = -56; // Adjust this to your navbar's true height+margin if needed
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
        }
        setActive(targetId);
    };

    return (
            <div className='navbarouter'>
                <div className='pill-outer' >
                {
                    navItems.map(item => (
                        <button
                            key={item.label}
                            // className={'button-nav'} OR {button-nav active} 
                            // .button-nav.active can only be applied to elements with button-nav applied to them 
                            className={`button-nav${active === item.label ? ' active' : ''}`}
                            onClick={() => handleNavClick(item.targetId)}
                        >
                            {item.name}
                        </button>
                    ))
                }  
                </div>
            </div>

    );
}

export default PillsHeader;