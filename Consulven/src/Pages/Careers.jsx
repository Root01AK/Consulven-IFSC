import  { useState } from 'react'
import Header from "../Components/Header";
import jobData from "../data/jobData";
import JobCard from "../Components/JobCard";
import { assets } from "../assets/assets";


const Careers = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobData);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [, setSortOption] = useState("");

  const handleSort = (option) => {
    setSortOption(option);
    setIsDropdownOpen(false);

    let sortedJobs = [...filteredJobs];

    switch(option) {
      case "Experience":
        sortedJobs.sort((a, b) => a.experience.localeCompare(b.experience));
        break;
      case "Latest":
        sortedJobs.sort((a, b) => a.latest.localeCompare(b.latest));
        break;
      case "A to Z":
        sortedJobs.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }
    setFilteredJobs(sortedJobs);
  };

  const handleSearch = () => {
    const filtered = jobData.filter(job =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <div>

      <Header title="Join Us" para="At Consulven, We Value Excellence and Integrity" image={assets.careerbanner} />
      <div className='careerContainer'>
        {/* LeftSide */}
        <div className='leftSide'>
          <h1>JOIN OUR TEAM</h1>
          <p>Our success is built on the collective expertise of our people. We nurture an environment where creativity thrives, leadership is cultivated, and collaboration is key. Whether you’re a seasoned professional or just starting your career, you’ll find opportunities to challenge yourself, grow your skills, and make a difference.</p>
          <a href='#jobSearch'> 
            <button>Open position <img src={assets.arrow_icon} alt="" /> </button>
          </a>
        </div>
        
        {/* Middle */}
        <div className='middle'>
          <div className='middleCircle'>
            <div className='sample1'>
              <div className='sample2'>
                <img src={assets.careerimg} alt=""/>
                {/* <div className='playBtn'>
                  <img src={assets.play_icon} alt=""/>
                </div> */}
              </div>
            </div>
            <div className='dot dot1'></div>
            <div className='dot dot2'></div>
            <div className='dot dot3'></div>
            <div className='dot dot4'></div>
            <div className='dot dot5'></div>
            <div className='dot dot6'></div>
            <div className='dot dot7'></div>
            <div className='dot dot8'></div>
            <div className='dot dot9'></div>
            <div className='dot dot10'></div>
          </div>
        </div>
        
        {/* RightSide */}
        <div className='rightSide'>
          <div className='dot dot1'></div>
          <div className='dot dot2'></div>
          <div className='dot dot3'></div>
          <div className='dot dot4'></div>
          <div className='dot dot5'></div>
          <div className='dot dot6'></div>
          <div className='dot dot7'></div>
          <div className='dot dot8'></div>
          <div className='dot dot9'></div>
        </div>

      </div>

      <div className='carrerContentContainer'>
        <h1>CURRENT OPENINGS</h1>
        <p>Explore the roles we’re currently hiring for and find the one that matches your skills and ambitions. Each role offers the opportunity to work on impactful projects, engage with a talented team, and grow your career in consulting and compliance.</p>
      </div>

      <div className='searchContainer'>

        <div className='leftSide'>
          <img src={assets.search_icon} alt="" />
          <input type="text" placeholder="Search by: Job title, Position, Keyword..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>
        <div className='rightSide'>
          <img src={assets.filter_icon} alt="" onClick={() => setIsDropdownOpen(!isDropdownOpen)} />
          <div className='dropdown'>
            {isDropdownOpen && (
            <div className="dropdown-options">
              <div onClick={() => handleSort("A to Z")}>A to Z</div>
              <div onClick={() => handleSort("Experience")}>Experience</div>
              <div onClick={() => handleSort("Latest")}>Latest</div>
            </div>
            )}  
          </div>
          <button className='jobFilterBtn' onClick={handleSearch}>FIND JOB</button>
        </div>

      </div>

      <div className="jobCotainerList" id='jobSearch'>
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => <JobCard key={job.id} job={job} />)
        ) : (
          <p>No Jobs Found.</p>
        )}
      </div>

    </div>
  )
}

export default Careers

