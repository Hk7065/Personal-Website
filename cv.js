var skillscontainer = document.getElementById('skills-container');
var animationDone = false;

const skillsData = [
    { name: 'Python', width: 70, color: '#3498db' },       // Blue
    { name: 'HTML', width: 80, color: '#e67e22' },        // Orange
    { name: 'CSS', width: 85, color: '#9b59b6' },         // Purple
    { name: 'JavaScript', width: 70, color: '#1abc9c' },  // Teal
    { name: 'NodeJs', width: 60, color: '#2ecc71' },      // Green
    { name: 'MongoDB', width: 60, color: '#e74c3c' },     // Red
    { name: 'PHP', width: 60, color: '#f1c40f' },         // Yellow
    { name: 'MySQL', width: 65, color: '#e84393' },       // Pink
    { name: 'VueJS', width: 70, color: '#00bcd4' },       // Cyan
    { name: 'React', width: 50, color: '#8e44ad' }        // Dark Purple
];

function createSkillBars() {
    skillscontainer.innerHTML = '';
    skillsData.forEach(skill => {
        let skillDiv = document.createElement('div');
        skillDiv.classList.add('skill-progress');
        skillDiv.innerHTML = `
            <div class="skill-bar" data-bar-width="${skill.width}" style="background-color: ${skill.color};">
                <div class="skill-name"><span>${skill.name}</span></div>
            </div>`;
        skillscontainer.appendChild(skillDiv);
    });
}

window.addEventListener('scroll', checkscroll);

function checkscroll() {
    var coordinates = skillscontainer.getBoundingClientRect();
    if (!animationDone && coordinates.top < window.innerHeight && coordinates.bottom >= 0) {
        fillbars();
        animationDone = true;
    }
}

function initialisebar() {
    createSkillBars();
    const progressbars = document.querySelectorAll('.skill-progress > div');
    for (let bar of progressbars) {
        bar.style.width = '0%';
    }
}

function fillbars() {
    const progressbars = document.querySelectorAll('.skill-progress > div');
    for (let bar of progressbars) {
        let targetwidth = parseInt(bar.getAttribute('data-bar-width'));
        bar.style.transition = 'width 1.5s ease-in-out';
        bar.style.width = targetwidth + '%';
    }
}

initialisebar();
