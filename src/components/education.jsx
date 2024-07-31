import React from 'react';
import '../styles/education.css';

const timelineData = [
    {
        text: 'B.Tech CSE | Govt. College of Engineering Kannur',
        date: '2020 - 2024',
        category: {
            tag: 'cgpa: 8.5',
            color: '#6e8efb'
        },
       
    },
    {
        text: 'Class 12 | Kendriya Vidyala Payyannur',
        date: '2018 - 2019',
        category: {
            tag: 'Percentage: 92',
            color: '#6e8efb'
        },
       
    },
    {
        text: 'Class 10 | Kendriya Vidyalaya Ezhimala',
        date: '2016 - 2017',
        category: {
            tag: 'cgpa: 10',
            color: '#6e8efb'
        },
       
    }
    
];

const TimelineItem = ({ data }) => (




    <div className="timeline-item">
        
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p>{data.text}</p>
            {data.link && (
                <a href={data.link.url} target="_blank" rel="noopener noreferrer">
                    {data.link.text}
                </a>
            )}
            <span className="circle" />
        </div>
      
    </div>
);

const Education = () => (


    <section id="Education"> 
    <div className="education-section">
        <div className="education-title">
            <h2>Education</h2>
        </div>
        <div className="timeline-container">
            {timelineData.length > 0 && (
                <div className="timeline-wrapper">
                    {timelineData.map((data, idx) => (
                        <TimelineItem data={data} key={idx} />
                    ))}
                </div>
            )}
        </div>
    </div>
    </section>
);

export default Education;
