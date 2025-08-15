'use client';

// Converted from Webflow qualifications/credentials section
// Original classes preserved for exact visual match
export default function QualificationsSection() {
  const qualifications = [
    {
      title: "Certified Mindfulness Coach",
      institution: "Mindful Academy",
      year: "(2021)",
      link: "https://linkedin.com"
    },
    {
      title: "Breathwork Facilitator",
      institution: "Mindful Academy", 
      year: "(2021)",
      link: "https://linkedin.com"
    },
    {
      title: "Trauma-Informed Yoga Training",
      institution: "Mindful Academy",
      year: "(2021)", 
      link: "https://linkedin.com"
    },
    {
      title: "500+ hours of client experience",
      institution: "Mindful Academy",
      year: "(2021)",
      link: "https://linkedin.com"
    }
  ];

  return (
    <div className="section bg">
      <div className="container">
        <div className="spacing">
          <div className="left-title">
            <div className="fade-in-on-scroll">
              <h2 className="title">
                <em>Questions? We're Here to Help you get started.</em>
              </h2>
            </div>
            <div className="fade-in-on-scroll">
              <div className="feature-paragraph-holder">
                <p>
                  Whether you're new to wellness or exploring deeper support, we know you may have questions.
                </p>
              </div>
            </div>
          </div>
          
          <div className="join-us-links-holder">
            {qualifications.map((qual, index) => (
              <a 
                key={index}
                className="join-us-links w-inline-block" 
                href={qual.link} 
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="join-us">
                  <h5 className="title">{qual.title}</h5>
                  <p className="paragraph-xl">{qual.institution}</p>
                  <p className="paragraph-xl">{qual.year}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
