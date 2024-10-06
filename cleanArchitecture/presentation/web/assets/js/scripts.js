const API_BASE = 'http://localhost:3000/api/phrases';

async function fetchPhrase() {
    try {
        const response = await fetch(`${API_BASE}/random`);
        const data = await response.json();
        document.getElementById('phrase').innerText = data.phrase || 'There are not available phrases';
    } catch (error) {
        document.getElementById('phrase').innerText = 'Error to get phrase';
    }
}

async function fetchAllPhrases() {
    try {
        const response = await fetch(API_BASE);
        const data = await response.json();
        const list = document.getElementById('phrases-list');
        list.innerHTML = '';
        data.phrases.forEach(phrase => {
            const li = document.createElement('li');
            li.innerText = phrase;
            list.appendChild(li);
        });
    } catch (error) {
        alert('Error to load phrases');
    }
}

async function addPhrase() {
    const phraseInput = document.getElementById('new-phrase');
    const phraseText = phraseInput.value.trim();
    if (!phraseText) {
        alert('Please, enter a phrase');
        return;
    }

    try {
        const response = await fetch(API_BASE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: phraseText })
        });
        const data = await response.json();
        if (response.status === 201) {
            alert(`Phrase added successfully: "${data.phrase}"`);
            phraseInput.value = '';
        } else {
            alert(`Error: ${data.error}`);
        }
    } catch (error) {
        alert('Error to add phrase.');
    }
}