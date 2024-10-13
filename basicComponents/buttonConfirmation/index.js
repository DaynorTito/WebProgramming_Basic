/**
 * Creates a confirmation button that opens a modal when clicked.
 * @param {Object} param0 - Contains button text, modal message, and button styles.
 * @param {string} param0.buttonText - The text displayed on the confirmation button.
 * @param {string} param0.modalMessage - The message displayed in the modal.
 * @param {string} param0.confirmText - The text for the confirm button in the modal.
 * @param {string} param0.cancelText - The text for the cancel button in the modal.
 * @param {string} param0.buttonColor - The background color of the confirmation button.
 * @returns {HTMLElement} - The confirmation button element.
 */
export function createConfirmationButton({ 
    buttonText = "Delete", 
    modalMessage = "Are you sure you want to delete this item?", 
    confirmText = "Confirm", 
    cancelText = "Cancel",
    buttonColor = "#dc3545"
}) {
    const button = document.createElement('button');
    button.classList.add('confirmation-button');
    button.style.backgroundColor = buttonColor;
    button.textContent = buttonText;

    button.addEventListener('click', () => {
        const modal = createModal({ message: modalMessage, confirmText, cancelText,
            onConfirm: () => {
                alert("Action confirmed!");
                modal.classList.remove('show');
                modal.remove();
            }
        });
        document.body.appendChild(modal);
        modal.classList.add('show');
    });

    return button;
}

/**
 * Creates a modal for confirmation actions.
 * @param {Object} options - Modal options including message and button texts.
 * @param {string} options.message - The confirmation message to display.
 * @param {string} options.confirmText - Text for the confirm button.
 * @param {string} options.cancelText - Text for the cancel button.
 * @param {Function} options.onConfirm - Callback function for confirm button.
 * @returns {HTMLElement} - The modal element.
 */
function createModal({ message, confirmText, cancelText, onConfirm }) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalContent = createModalContent(message, confirmText, cancelText, onConfirm);
    modal.appendChild(modalContent);
    modal.addEventListener('click', (e) => {
        if (e.target === modal)
            closeModal(modal);
    });

    return modal;
}

/**
 * Creates the content for the modal.
 * @param {string} message - The confirmation message to display.
 * @param {string} confirmText - Text for the confirm button.
 * @param {string} cancelText - Text for the cancel button.
 * @param {Function} onConfirm - Callback function for confirm button.
 * @returns {HTMLElement} - The modal content element.
 */
function createModalContent(message, confirmText, cancelText, onConfirm) {
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const modalHeader = createModalHeader();
    const modalBody = createModalBody(message);
    const modalFooter = createModalFooter(confirmText, cancelText, onConfirm);

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);

    return modalContent;
}

/**
 * Creates the header for the modal.
 * @returns {HTMLElement} - The modal header element.
 */
function createModalHeader() {
    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');

    const modalTitle = document.createElement('span');
    modalTitle.classList.add('modal-title');
    modalTitle.textContent = "Confirmation";

    const closeButton = document.createElement('button');
    closeButton.classList.add('close-modal');
    closeButton.textContent = '×';
    closeButton.addEventListener('click', () => closeModal(modalHeader.parentElement.parentElement));

    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);

    return modalHeader;
}

/**
 * Creates the body for the modal.
 * @param {string} message - The message to display in the modal body.
 * @returns {HTMLElement} - The modal body element.
 */
function createModalBody(message) {
    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');
    const messageParagraph = document.createElement('p');
    messageParagraph.textContent = message;
    modalBody.appendChild(messageParagraph);
    return modalBody;
}

/**
 * Creates the footer for the modal with confirm and cancel buttons.
 * @param {string} confirmText - Text for the confirm button.
 * @param {string} cancelText - Text for the cancel button.
 * @param {Function} onConfirm - Callback function for the confirm button.
 * @returns {HTMLElement} - The modal footer element.
 */
function createModalFooter(confirmText, cancelText, onConfirm) {
    const modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer');
    
    const cancelButton = document.createElement('button');
    cancelButton.classList.add('btn', 'cancel');
    cancelButton.textContent = cancelText;
    cancelButton.addEventListener('click', () => closeModal(modalFooter.parentElement.parentElement));

    const confirmButton = document.createElement('button');
    confirmButton.classList.add('btn', 'confirm');
    confirmButton.textContent = confirmText;
    confirmButton.addEventListener('click', () => {
        onConfirm();
        closeModal(modalFooter.parentElement.parentElement);
    });

    modalFooter.appendChild(cancelButton);
    modalFooter.appendChild(confirmButton);

    return modalFooter;
}

/**
 * Closes the modal and removes it from the DOM.
 * @param {HTMLElement} modal - The modal element to close.
 */
function closeModal(modal) {
    modal.classList.remove('show');
    modal.remove();
}
