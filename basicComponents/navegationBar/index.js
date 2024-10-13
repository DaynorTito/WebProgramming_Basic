/**
 * Creates a navigation bar with logo, search bar, menu, separator, and icons.
 * @param {Object} param0 - Contains logo text and menu items.
 * @returns {HTMLElement} - The complete <nav> element.
 */
export function createNavBar({ logoText, menuItems = defaultMenuItems }) {
    const nav = document.createElement('nav');
    nav.classList.add('navbar');

    const logo = createLogo(logoText);
    const searchBar = createSearchBar();
    const menu = createNavBarMenu(menuItems);
    const separator = createSeparator();
    const icons = createNavBarIcons();

    nav.appendChild(logo);
    nav.appendChild(searchBar);
    nav.appendChild(menu);
    nav.appendChild(separator);
    nav.appendChild(icons);

    return nav;
}

/**
 * Creates the logo element for the navigation bar.
 * @param {string} logoText - The text for the logo.
 * @returns {HTMLElement} - The logo element.
 */
function createLogo(logoText) {
    const logo = document.createElement('div');
    logo.classList.add('navbar-logo');
    logo.innerHTML = `<a href="#">${logoText}</a>`;
    return logo;
}

/**
 * Creates a separator element between sections in the navigation bar.
 * @returns {HTMLElement} - The separator element.
 */
function createSeparator() {
    const separator = document.createElement('div');
    separator.classList.add('navbar-separator');
    return separator;
}

/**
 * Creates the search bar for the navigation bar.
 * @returns {HTMLElement} - The search bar element.
 */
function createSearchBar() {
    const searchBar = document.createElement('div');
    searchBar.classList.add('navbar-search');
    searchBar.innerHTML = `
        <input type="text" placeholder="Search for products..." class="search-input">
        <button class="search-button">🔍</button>
    `;
    return searchBar;
}

/**
 * Creates the navigation menu with provided menu items.
 * @param {Array} menuItems - Array of objects representing menu links.
 * @returns {HTMLElement} - The menu element.
 */
function createNavBarMenu(menuItems) {
    const menu = document.createElement('ul');
    menu.classList.add('navbar-menu');
    menuItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${item.href}"><i class="fas ${item.icon}"></i> ${item.text}</a>`;
        menu.appendChild(li);
    });
    return menu;
}

/**
 * Creates the icons section for the cart and user login.
 * @returns {HTMLElement} - The icons element.
 */
function createNavBarIcons() {
    const icons = document.createElement('div');
    icons.classList.add('navbar-icons');
    icons.innerHTML = `
        <a href="#" class="navbar-cart"><i class="fas fa-shopping-cart"></i> Cart (0)</a>
        <a href="#" class="navbar-user"><i class="fas fa-user"></i> Login</a>
    `;
    return icons;
}

const defaultMenuItems = [
    { href: "#", icon: "fa-home", text: "Home" },
    { href: "#", icon: "fa-store", text: "Shop" },
    { href: "#", icon: "fa-tags", text: "Categories" },
    { href: "#", icon: "fa-percent", text: "Deals" },
    { href: "#", icon: "fa-phone-alt", text: "Contact" },
];
