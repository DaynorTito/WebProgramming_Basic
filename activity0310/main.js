function initApp() {
    const cv = getCV();
    
    const skillsEl = renderSkills(cv.skills);
    // console.log(skillsEl)
    // render inside div

    const skillsContainer = document.getElementById('skills');

    skillsContainer.append(skillsEl);
}


document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM successfully loaded and parsed");
    initApp();
} ) 