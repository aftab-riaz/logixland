import React, { useEffect, useState } from "react";
import axios from "axios";
import useApiRequest from "../../hooks/useApiRequest";


const Skills = () => {
           const [skills, setskills] = useState([]);
           const [loading, setLoading] = useState(true);
           const [error, setError] = useState(null);
       
           const fetchskills = async () => {
                   setLoading(true);
                   await useApiRequest({
                     url: 'skills',
                     method: 'get',
                     }).then(res => {
                     setskills(res.data);
                   }).catch(error => {
                     console.log('Error ', error.data.message);
                   }).finally(() => {
                     setLoading(false);
                   })
               };
       
           useEffect(() => {
               fetchskills();
           }, []);

    return (
        <div className="skills-container">
            <div className="container">
                <p className='skills-heading'>Our Tools & Technologies</p>
                <h2 style={{ fontSize: '45px', color: 'white' }} className="heading">
                    Let’s Explore Popular <span style={{ color: '#d9ff3f' }}>Skills & Experience</span>
                </h2>

                {loading ? (
                    <p>Loading skills...</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    <div className="skills-row">
                        {skills.map((skill) => (
                            <div key={skill.id} className="skill-card">
                                <img src={skill.image_url} alt={skill.name} className="skill-image" />
                                <h3 className="skill-name">{skill.name}</h3>
                                <div className="percentage-box">
                                    <p className="skill-percentage">{skill.percentage}%</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Skills;
