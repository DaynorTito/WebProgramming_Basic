document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleBtn');
    toggleBtn.addEventListener('click', toggleCurriculum);
});

let curriculumVisible = false;
let curriculumData = null;

async function toggleCurriculum() {
    const infoDiv = document.getElementById('information');
    const toggleBtn = document.getElementById('toggleBtn');

    if (curriculumVisible) {
        infoDiv.style.display = 'none';
        toggleBtn.textContent = 'Show Information';
        curriculumVisible = false;
    } else {
        if (!curriculumData) {
            try {
                curriculumData = await fetchJSONData('./data.json');
            } catch (error) {
                console.error('Error loading data:', error);
                return;
            }
        }
        renderCurriculum(curriculumData);
        infoDiv.style.display = 'block';
        toggleBtn.textContent = 'Hide Information';
        curriculumVisible = true;
    }
}

async function fetchJSONData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Error fetching JSON data');
    }
    return response.json();
}

function renderCurriculum(data) {
    const infoDiv = document.getElementById('information');
    infoDiv.innerHTML = '';

    const photoContainer = document.createElement('div');
    photoContainer.id = 'photoContainer';
    const profilePhoto = document.createElement('img');
    profilePhoto.id = 'profilePhoto';
    profilePhoto.src = data.photo;
    profilePhoto.alt = 'Profile Photo';
    profilePhoto.onerror = () => {
        console.error('Error loading image:', data.photo);
        profilePhoto.alt = 'Image not available';
    };
    photoContainer.appendChild(profilePhoto);
    infoDiv.appendChild(photoContainer);

    const name = createElement('h2', data.name);
    const description = createElement('p', data.description);
    const city = createElement('p', data.city);

    infoDiv.appendChild(name);
    infoDiv.appendChild(description);

   
    addSect(infoDiv, 'City', data.city);

    addSection(infoDiv, 'Education', data.education.map(ed => 
        `${ed.degree}, ${ed.institution} (${ed.year})`
    ));

    addSection(infoDiv, 'Skills', data.skills);
    addSection(infoDiv, 'Experience', data.experience.map(exp => 
        `${exp.position} at ${exp.company} (${exp.period}): ${exp.responsibilities}`
    ));
}

function addSection(parent, title, items) {
    const titleElement = createElement('h3', title);
    const list = createElement('ul', '');

    items.forEach(item => {
        const listItem = createElement('li', item);
        list.appendChild(listItem);
    });

    parent.appendChild(titleElement);
    parent.appendChild(list);
}

function addSect(parent, title, item) {
    const titleElement = createElement('h3', title);
    const list = createElement('p', item);

    parent.appendChild(titleElement);
    parent.appendChild(list);
}

function createElement(tag, text) {
    const element = document.createElement(tag);
    element.textContent = text;
    return element;
}
