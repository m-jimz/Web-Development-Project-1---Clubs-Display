import Event from './Event'


const Card = () => {
    return (

    <div className="Card">
        <Event
            title="Computer Science Club 💻"
            description="Explore programming, web development, and software engineering through workshops, projects, and networking events."
            email="csclub@campus.edu"
        />

        <Event
            title="Accounting Society 📊"
            description="Connect with accounting professionals, learn financial skills, and discover internship opportunities."
            email="accounting@campus.edu"
        />

        <Event
            title="African Student Association 🌍"
            description="Celebrate African cultures through social events, educational programs, and cultural showcases."
            email="africanstudents@campus.edu"
        />

        <Event
            title="Engineering Club ⚙️"
            description="Collaborate on engineering projects, attend guest lectures, and develop practical technical skills."
            email="engineering@campus.edu"
        />

        <Event
            title="Robotics Team 🤖"
            description="Design, build, and program robots while competing in exciting robotics challenges."
            email="robotics@campus.edu"
        />

        <Event
            title="Business Leaders Association 💼"
            description="Develop leadership, entrepreneurship, and networking skills through workshops and guest speakers."
            email="businessleaders@campus.edu"
        />

        <Event
            title="Environmental Club 🌱"
            description="Promote sustainability through campus initiatives, volunteer projects, and environmental education."
            email="environment@campus.edu"
        />

        <Event
            title="Art & Design Society 🎨"
            description="Express creativity through exhibitions, collaborative projects, and design workshops."
            email="artdesign@campus.edu"
        />

        <Event
            title="Pre-Med Association 🩺"
            description="Support future healthcare professionals through mentoring, volunteering, and career guidance."
            email="premed@campus.edu"
        />

        <Event
            title="Cybersecurity Club 🔒"
            description="Learn ethical hacking, network defense, and cybersecurity fundamentals through hands-on activities."
            email="cybersecurity@campus.edu"
        />

    </div>
    
    )
}

export default Card;