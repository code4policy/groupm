const courseRecommendations = {
    "Data & Technology": [
        { name: "Machine Learning and Big Data Analytics", stem: true },
        { name: "Data Science for Politics", stem: true },
        { name: "Digital Government", stem: false },
        { name: "Law, Order, and Algorithms", stem: true }
    ],
    "Government & Politics": [
        { name: "Politics and Public Policy", stem: false },
        { name: "Ethics and Political Decision-Making", stem: false },
        { name: "Leadership in Public Sector Organizations", stem: false }
    ],
    "International Development": [
        { name: "Development Finance", stem: false },
        { name: "Public-Private Partnerships", stem: false },
        { name: "Infrastructure Policy and Planning", stem: false }
    ],
    "Leadership & Organizational Change": [
        { name: "Negotiation Skills", stem: false },
        { name: "Strategy for Impact", stem: false },
        { name: "Operations Management", stem: false }
    ],
    "Entrepreneurship & Non-Profits": [
        { name: "Social Impact Ventures", stem: false },
        { name: "Fundraising and Resource Mobilization", stem: false },
        { name: "NGO Management", stem: false }
    ]
};

document.getElementById('courseForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const industry = document.getElementById('industryPreference').value;
    const filterSTEM = document.getElementById('stemEligible').checked;
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = '';

    if (industry && courseRecommendations[industry]) {
        courseRecommendations[industry]
            .filter(course => !filterSTEM || course.stem) // Filter based on STEM eligibility
            .forEach(course => {
                const li = document.createElement('li');
                li.textContent = course.name;
                courseList.appendChild(li);
            });
    } else {
        courseList.innerHTML = '<li>No recommendations available. Please try again.</li>';
    }
});
