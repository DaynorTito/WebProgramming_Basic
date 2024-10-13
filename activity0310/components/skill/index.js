
function renderSkill(skill){
    const skillEl = document.createElement("div");
    const nameEl = document.createElement("span");
    const levelEl = document.createElement("span");
    nameEl.innerHTML =  skill.name;
    levelEl.innerHTML = skill.level;

    skillEl.append(nameEl, levelEl);

    return skillEl;
}