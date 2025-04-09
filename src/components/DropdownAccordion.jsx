import React, { useState, useRef } from 'react';
import "../App.css"; // Keep your CSS here

const data = [
  {
    title: 'Government & Public Sector',
    points: [
      'We help governments protect national interests and build public trust.',
      'Crisis Communication & Media Management',
      'Disinformation Monitoring & Counterstrategy',
      'Strategic Foresight & Threatcasting',
    ],
  },
  {
    title: 'Private Sector & Corporations',
    points: [
      'We help businesses safeguard their reputation, mitigate risks, and maintain investor confidence.',
      'Reputation & Crisis Risk Management',
      'Investor Confidence & Economic Stability Reports',
      'Cyber Threat & Digital Investigations',
    ],
  },
  {
    title: 'Law Enforcement & Security',
    points: [
      'We provide real-time intelligence and digital forensics to combat security threats',
      'Threat Detection & Risk Assessments',
      'Social Media & Open-Source Intelligence',
      'Counter-Disinformation & Influence Operations',
    ],
  },
  {
    title: 'Media & Journalism',
    points: [
        'We empower journalists and media organizations with tools to fight misinformation and understand audience sentiment shifts.',
        'Media Intelligence & Narrative Analysis',
        'Ethical AI & Fact-Checking Tools',
        'Audience Sentiment & Influence Monitoring',
    ],
  },
  {
    title: 'Nonprofits & Advocacy Groups',
    points: [
      "We help NGOs and advocacy groups create impactful narratives and counter misinformation.",
      'Campaign & Messaging Strategy Consulting',
      'Data-Driven Public Sentiment Reports',
      "Misinformation & Media Bias Analysis",
    ],
  },
];

const DropdownAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const refs = useRef([]);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="dropdown-container">
      {data.map((item, index) => (
        <div className="dropdown-div" key={index}>
          <div className="top-part">
            <p>
              <span><i class="ri-verified-badge-line"></i></span> {item.title} {/* {index + 1}. */}
            </p>
            <button onClick={() => toggleDropdown(index)}>
              {openIndex === index ? 'Close' : 'Read'}
            </button>
          </div>
          <div
            className="dropdown-answer"
            ref={(el) => (refs.current[index] = el)}
            style={{
              maxHeight: openIndex === index ? `${refs.current[index]?.scrollHeight}px` : '0px',
            }}
          >
            <ol>
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropdownAccordion;
