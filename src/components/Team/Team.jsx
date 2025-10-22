import React from 'react';
import { teamData } from './TeamData';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Team.css';

function Team() {
    return (
        <section id='team' className='team'>
            <div className="container">
                <div className="team-title">
                    <h2>TEAM</h2>
                    <p>OUR HARDWORKING TEAM</p>
                </div>
                <div className="row">
                    {teamData.map((data) => {
                        return (
                            <div className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4' key={data.id}>
                                <div className="team-item">
                                    <img src={data.image} alt={data.name} className='team-img image-fluid' />
                                    <div className="team-info">
                                        <h3>{data.name}</h3>
                                        <p>{data.designation}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Team;

