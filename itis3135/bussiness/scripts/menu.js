function loadMenu(containerId, jsonFile) {
    $.ajax({
        url: jsonFile,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            const menuContainer = $('#' + containerId);

            // Add the logo
            if (data.logo) {
                const logo = $('<figure>').append(
                    $('<img>', {
                        src: data.logo.src,
                        alt: data.logo.alt
                    })
                );
                menuContainer.append(logo);
            }

            // Add menu items
            if (data.menuItems) {
                const menuList = $('<ul>');
                $.each(data.menuItems, function(index, item) {
                    const menuItem = $('<li>').append(
                        $('<a>', {
                            text: item.name,
                            href: item.url
                        })
                    );
                    menuList.append(menuItem);
                });
                menuContainer.append(menuList);
            }
        },
        error: function(xhr, status, error) {
            console.error(`Error loading ${jsonFile}:`, error);
        }
    });
}

$(document).ready(function() {
    loadMenu("main-menu", "components/header.json");
});

function loadFooter(containerId, jsonFile) {
    $.ajax({
        url: jsonFile,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            const footerContainer = $('#' + containerId);
            footerContainer.html(data.text); // Set the footer content dynamically
        },
        error: function(xhr, status, error) {
            console.error(`Error loading ${jsonFile}:`, error);
        }
    });
}

$(document).ready(function() {
    loadFooter("footer-content", "components/footer.json");
});