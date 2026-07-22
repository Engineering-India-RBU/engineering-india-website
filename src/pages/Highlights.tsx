import React from 'react';

interface HighlightItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  placeholderText: string;
  tags: string[];
}

export default function Highlights() {
  const highlightItems: HighlightItem[] = [
    {
      id: 'abhyudaya',
      category: 'Flagship Event',
      title: 'ABHYUDAYA 25.0',
      subtitle: 'Flagship Chapter Event',
      description:
        'Our signature annual gathering, focusing on leadership, student skill-building, and fostering teamwork among RBU engineering students.',
      placeholderText: 'INSERT PHOTO:\nAbhyudaya 25.0 Event',
      tags: ['#Abhyudaya', '#EngineeringIndia', '#RBUChapter'],
    },
    {
      id: 'neurosync',
      category: 'Technical Session',
      title: 'NEUROSYNC',
      subtitle: 'Domain Skills Workshops',
      description:
        'Practical technical sessions, counseling, and interactive workshops to develop core competencies beyond the classroom, run by our technical cell.',
      placeholderText: 'INSERT PHOTO:\nNeurosync Workshop\nSession',
      tags: ['#Neurosync', '#TechnicalSkills', '#Workshops'],
    },
    {
      id: 'cdp',
      category: 'Social Impact',
      title: 'CDP (Community Development Program)',
      subtitle: 'Social Outreach & Development',
      description:
        "Driven by our 'Act locally' ethos, our team conducts regular social work, including visits to local Dharmshalas and community support drives.",
      placeholderText: 'INSERT PHOTO: CDP /\nDharmshala Visit',
      tags: ['#CommunityDevelopment', '#SocialWork', '#Outreach'],
    },
    {
      id: 'orientation',
      category: 'Team & Leadership',
      title: 'TEAM EI RBU: ORIENTATION',
      subtitle: 'Future Leaders Onboarding',
      description:
        'Introducing and orienting our new core team members and student chapter leads for the 2025–26 tenure.',
      placeholderText: 'INSERT PHOTO: Team\nOrientation & Group\nPhoto',
      tags: ['#TeamEIRBU', '#Leadership', '#Orientation'],
    },
  ];

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif",
        backgroundColor: '#ffffff',
        color: '#0f172a',
        minHeight: '100vh',
        boxSizing: 'border-box',
      }}
    >
      {/* Banner Header with Tricolor Gradient */}
      <div
        style={{
          position: 'relative',
          padding: '2.5rem 1rem',
          textAlign: 'center',
          background:
            'linear-gradient(90deg, rgba(255,153,51,0.12) 0%, rgba(255,255,255,1) 50%, rgba(19,136,8,0.12) 100%)',
          borderBottom: '1px solid #e2e8f0',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)',
          }}
        />

        <h1
          style={{
            fontSize: '2.2rem',
            fontWeight: 900,
            color: '#1d4ed8',
            letterSpacing: '0.04em',
            margin: 0,
            textTransform: 'uppercase',
          }}
        >
          OUR KEY HIGHLIGHTS
        </h1>

        <p
          style={{
            color: '#334155',
            fontSize: '0.95rem',
            fontWeight: 600,
            marginTop: '0.5rem',
            marginBottom: 0,
          }}
        >
          “Think nationally. Act locally.” — Building better engineers, not just better resumes.
        </p>
      </div>

      {/* Main Container - Flexbox Row Grid */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '2rem auto',
          padding: '0 1rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.25rem',
            justify: 'space-between',
          }}
        >
          {highlightItems.map((item) => (
            <div
              key={item.id}
              style={{
                width: 'calc(50% - 0.65rem)',
                minWidth: '320px',
                display: 'flex',
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                borderRadius: '10px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
                overflow: 'hidden',
                boxSizing: 'border-box',
              }}
            >
              {/* Image Placeholder Block */}
              <div
                style={{
                  width: '38%',
                  minWidth: '130px',
                  backgroundColor: '#d1d5db',
                  borderRight: '1px solid #cbd5e1',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  padding: '0.75rem',
                  textAlign: 'center',
                  color: '#374151',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  lineHeight: '1.3',
                  whiteSpace: 'pre-line',
                  boxSizing: 'border-box',
                }}
              >
                {item.placeholderText}
              </div>

              {/* Card Text Content */}
              <div
                style={{
                  width: '62%',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  boxSizing: 'border-box',
                }}
              >
                <div>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      color: '#0f172a',
                    }}
                  >
                    {item.title}
                  </h3>
                  <h4
                    style={{
                      margin: '0.2rem 0 0.4rem 0',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: '#2563eb',
                    }}
                  >
                    {item.subtitle}
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.78rem',
                      color: '#475569',
                      lineHeight: '1.4',
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Hashtags */}
                <div
                  style={{
                    marginTop: '0.5rem',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: '#64748b',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.3rem',
                  }}
                >
                  {item.tags.join(' ')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}