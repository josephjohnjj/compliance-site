// Accordion function for Banking Compliance
function showAccordion(id) {
    const allInfos = document.querySelectorAll('.account-info');
    const allButtons = document.querySelectorAll('.checklist-btn');

    allInfos.forEach(info => {
        const button = info.previousElementSibling;

        if (info.id === id) {
            const isOpen = info.classList.contains('show');

            // Toggle clicked one
            info.classList.toggle('show', !isOpen);
            button.classList.toggle('active', !isOpen);
        } else {
            // Close all others
            info.classList.remove('show');
            button.classList.remove('active');
        }
    });
}
