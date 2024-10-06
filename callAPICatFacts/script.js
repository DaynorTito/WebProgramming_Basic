document.getElementById('loadFactsBtn').addEventListener('click', loadCatFacts);
document.getElementById('randomFactBtn').addEventListener('click', loadRandomCatFact);

async function loadCatFacts() {
    try {
        const response = await fetch('https://catfact.ninja/facts?limit=5');
        if (!response.ok)
            throw new Error(`Error with status: ${response.status}`);
        const data = await response.json();
        const factsList = document.getElementById('factsList');
        factsList.innerHTML = '';
        data.data.forEach(fact => {
            const factItem = document.createElement('div');
            factItem.classList.add('fact');
            factItem.textContent = fact.fact;
            factsList.appendChild(factItem);
        });
    } catch (error) {
        console.error('Error fetching cat facts:', error);
    }
}


async function loadRandomCatFact() {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        if (!response.ok)
            throw new Error(`Error with status: ${response.status}`);
        const data = await response.json();
        const randomFact = document.getElementById('randomFact');
        randomFact.textContent = data.fact;
    } catch (error) {
        console.error('Error fetching random cat fact:', error);
    }
}
