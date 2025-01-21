document.addEventListener('DOMContentLoaded', () => {
    const activities = [
        { title: 'Lecture on Quantum Computing', date: '2025-02-15', description: 'An in-depth look into the world of quantum mechanics and its applications.' },
        { title: 'AI in Modern Research', date: '2025-03-10', description: 'Exploring the impact of artificial intelligence in contemporary scientific studies.' }
    ];

    const interviews = [
        { title: 'Interview with Dr. Jane Doe', date: '2025-01-20', summary: 'Discussing the future of renewable energy with a leading expert.' },
        { title: 'Chat with Prof. John Smith', date: '2025-01-25', summary: 'Insights into the latest advancements in genetic engineering.' }
    ];

    const activitiesSection = document.getElementById('activities');
    const interviewsSection = document.getElementById('interviews');

    activities.forEach(activity => {
        const activityElement = document.createElement('div');
        activityElement.classList.add('activity');
        activityElement.innerHTML = `
            <h3>${activity.title}</h3>
            <p><strong>Date:</strong> ${activity.date}</p>
            <p>${activity.description}</p>
        `;
        activitiesSection.appendChild(activityElement);
    });

    interviews.forEach(interview => {
        const interviewElement = document.createElement('div');
        interviewElement.classList.add('interview');
        interviewElement.innerHTML = `
            <h3>${interview.title}</h3>
            <p><strong>Date:</strong> ${interview.date}</p>
            <p>${interview.summary}</p>
        `;
        interviewsSection.appendChild(interviewElement);
    });
});