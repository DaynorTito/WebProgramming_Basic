import { createConfirmationButton } from "./buttonConfirmation/index.js";
import { createNavBar } from "./navegationBar/index.js";


function initApp() {
    const navbarEl = createNavBar({logoText: "Qatu " });
    const navbarContainer = document.getElementById('navbar');
    navbarContainer.append(navbarEl);

    const confirmationButtonEl = createConfirmationButton({ buttonText: "Delete" });
    const buttonContainer = document.getElementById('button-container');
    buttonContainer.append(confirmationButtonEl);
}

document.addEventListener('DOMContentLoaded', () => {
    initApp()
});
