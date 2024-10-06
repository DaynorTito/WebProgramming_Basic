function rendera() {
    const cvContainer = document.getElementById('cvContext');
    if (cvContainer) {
        cvContainer.innerText = "This is the CV content";
    } else {
        console.error('Element with id "cvContext" not found');
    }
}
