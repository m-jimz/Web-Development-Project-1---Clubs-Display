import Event from './Event'

const clubs = [
    {
        title: 'Accounting & Business Organization',
        description:
            'Promotes accounting through networking, internships, career opportunities, leadership development, and community service.',
    },
    {
        title: 'African Student Association',
        description:
            'Celebrates African cultures through cultural, social, and educational activities while fostering community and connection.',
    },
    { title: 'Atsy Lens Club', description: 'Photography and visual storytelling.' },
    { title: 'Association of Political Science Students', description: 'Political discussion and events.' },
    { title: 'AV Music Production Club', description: 'Audio/visual and music production.' },
    { title: 'Black Student Union', description: 'Community and cultural programming.' },
    { title: 'Calculus Clashers', description: 'Math problem solving and competitions.' },
    { title: 'Chemistry Club', description: 'Chemistry experiments and study groups.' },
    { title: 'Crochet Club', description: 'Casual crochet and crafts.' },
    { title: 'Fellowship of the Arts Club', description: 'Art exhibitions and workshops.' },
    { title: 'Health Occupations Students of America', description: 'Health career development and outreach.' },
    { title: 'Hype Club', description: 'Campus event promotion and engagement.' },
]

const Card = () => {
    return (
        <div className="Card">
            {clubs.map((club, idx) => (
                <Event key={club.title || idx} {...club} />
            ))}
        </div>
    )
}

export default Card;