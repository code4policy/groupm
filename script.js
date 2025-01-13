const courseRecommendations = {
    "Data & Technology": [
        "Machine Learning and Big Data Analytics",
        "Data Science for Politics",
        "Digital Government",
        "Law, Order, and Algorithms"
    ],
    "Government & Politics": [
        "Politics and Public Policy",
        "Ethics and Political Decision-Making",
        "Leadership in Public Sector Organizations"
    ],
    "International Development": [
        "Development Finance",
        "Public-Private Partnerships",
        "Infrastructure Policy and Planning"
    ],
    "Leadership & Organizational Change": [
        "Negotiation Skills",
        "Strategy for Impact",
        "Operations Management"
    ],
    "Entrepreneurship & Non-Profits": [
        "Social Impact Ventures",
        "Fundraising and Resource Mobilization",
        "NGO Management"
    ]
};

document.getElementById('surveyForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const industry = document.getElementById('industryPreference').value;
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = '';

    if (industry && courseRecommendations[industry]) {
        courseRecommendations[industry].forEach(course => {
            const li = document.createElement('li');
            li.textContent = course;
            courseList.appendChild(li);
        });
    } else {
        courseList.innerHTML = '<li>No recommendations available. Please try again.</li>';
    }
});
