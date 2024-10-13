
const skills = [

    {
        name: "Java",
        level: 9
    }
]

function renderSkills(skills) {
    // const viwe = `
    //     <ul>
    //         <li>${skills}</li>
    //     </ul>
    // `;

    const listEl = document.createElement('ul');
    const itemEl = document.createElement('li');

    const skillsEl = skills.map((skill) => {
        const itemEl = document.createElement('li');
        itemEl.append(renderSkill(skill));
        return itemEl;
    });

    listEl.append(...skillsEl);
    return listEl;
}