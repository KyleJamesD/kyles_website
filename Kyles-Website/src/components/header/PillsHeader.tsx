import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Header.module.css';
import { useState } from "react";
import { useEffect } from 'react';


const PillsHeader = () => {
// The targetID must be set in the actual Div you are navigating to.  <div id="projects"> </div>
    const navItems = [
        {name:'Home', label: 'home', targetId: 'home' },
        { name:'Projects', label: 'projects2' , targetId: 'projects2'},
        {name:'About', label: 'about', targetId: 'about' },
        { name:'Contact', label: 'contact', targetId: 'contact' }
      ];

      const [active, setActive] = useState('home'); // default to 'Home'
      useEffect(() => {
        // Get all section DOM nodes
        const sections = navItems.map(item => document.getElementById(item.targetId)).filter(Boolean);
    
        const handleScroll = () => {
          let selected = 'home'; // fallbac
          for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            // Top of section
            if (section){
                const rect = section.getBoundingClientRect();
            // If section is at least 100px in viewport from top; adjust if desired
            if (navItems[i].label == "home") {
                if (rect.top <= 400 && rect.bottom > 300) {
                    selected = navItems[i].label;
                    break;
                  }
            }
            if (navItems[i].label == "projects2") {
                if (rect.top <= 400 && rect.bottom > 100) {
                    selected = navItems[i].label;
                    break;
                  }
            }
            if (navItems[i].label == "about") {
                if (rect.top <= 800 && rect.bottom > 400) {
                    selected = navItems[i].label;
                    break;
                  }
            }
            if (navItems[i].label == "contact") {
                if (rect.top <= 1000 && rect.bottom > 400) {
                    selected = navItems[i].label;
                    break;
                  }
            }
            }
          }
          setActive(selected);
        };
    
        window.addEventListener('scroll', handleScroll, { passive: true });
        // Trigger once in case already scrolled
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
      }, [navItems]);
    

    // Called when a nav button is clicked
    const handleNavClick = (targetId: string) => {
        // Find the section
        const section = document.getElementById(targetId);
        if(targetId == 'home')
        {
            if (section) {
                // Scroll to it smoothly, with a slight offset for the navbar height
                const yOffset = -160; // Adjust this to your navbar's true height+margin if needed
                const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
        
                window.scrollTo({ top: y, behavior: 'smooth' });
                }
                setActive(targetId);

        }
        else if(targetId == 'contact') {
            if (section) {
                // Scroll to it smoothly, with a slight offset for the navbar height
                const yOffset = -1; // Adjust this to your navbar's true height+margin if needed
                const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
        
                window.scrollTo({ top: y, behavior: 'smooth' });
                }
                setActive(targetId);

        }
        else{
            if (section) {
                // Scroll to it smoothly, with a slight offset for the navbar height
                const yOffset = -56; // Adjust this to your navbar's true height+margin if needed
                const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
        
                window.scrollTo({ top: y, behavior: 'smooth' });
                }
                setActive(targetId);
        }
        
    };

    return (
            <div className={styles.navbarouter}>
                <div className={styles.pillouter} >
                {
                    navItems.map(item => (
                        <button
                            key={item.label}
                            // className={'button-nav'} OR {button-nav active} 
                            // .button-nav.active can only be applied to elements with button-nav applied to them 
                            className={`${styles.buttonnav} ${active === item.label ?  `${styles.active}` : ''}`}
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