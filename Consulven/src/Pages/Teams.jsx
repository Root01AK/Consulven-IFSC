import {useState} from 'react'
import {FaLinkedinIn } from "react-icons/fa";
import { useNavigate   } from 'react-router-dom';
import teamMembers from '../data/teamData';
import SectionTitle from "../Components/SectionTitle";
import Header from '../Components/Header'
import CustomCursor from "../Components/cursorMain.jsx"
import { assets } from "../assets/assets";

const Teams = () => {
    const navigate = useNavigate();
    const [isHovering, setIsHovering] = useState(false);

    const handleClick = (id) => {
        navigate(`/team/${id}`);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    return (
        <div className='teams-container'>
              <Header title='OUR PEOPLE' para='Meet our Leadership Team' image={assets.teambanner} />
            <div className='teams-main'>
                <div className='teams-head'>
                <SectionTitle sectionTitle={"OUR PEOPLE"}  />
                </div>
                <div className='teams-content'>
                    <div className='teams-content-para'>
                        <p>Steered by a leadership team with vast experience across finance, consulting,regulatory affairs, and operations, Consulven IFSC is equipped
                             to offer forward-thinking strategies that help clients navigate challenges and unlock growth opportunities. The team’s diverse backgrounds
                              bring fresh perspectives to problem-solving and business transformation. By leveraging insights from multiple disciplines,
                               we deliver strategies that address current needs and prepare businesses for future growth.</p>
                    </div>
                    <div className='teams-content-cards'>
                        {teamMembers.map(member => (
                            
                            <div
                                className="teams-content-card" 
                                key={member.id}
                                onClick={() => handleClick(member.id)} // Pass the id to handleClick
                            >
                                <div className={`teams-content-card1  ${member.size === 'small' ? 'small-card' : 'large-card'}`}>
                                {isHovering &&
                                 <CustomCursor 
                                    cursorImage={assets.abouticon}
                                    cursorSize={{ width: 80, height: 80 }}
                                 />}
                                    <img src={member.image} alt={member.name} className='team-img' onMouseEnter={handleMouseEnter} 
                                        onMouseLeave={handleMouseLeave} />
                                    
                                    <div className='teams-content-name'>
                                        <div className='teams-content-design'>
                                            <h1>{member.name}</h1>
                                            <p>{member.role}</p>
                                        </div>
                                        <div className='teams-content-media'>
                                            <a href={member.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn className='teams-content-media-icons' color='white' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teams



