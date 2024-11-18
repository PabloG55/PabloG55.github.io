function loadMenu(containerId, jsonFile) {
    $.ajax({
        url: jsonFile,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            const menuContainer = $('#' + containerId);
            $.each(data, function(index, item) {
                const menuItem = $('<a>', {
                    text: item.name,
                    href: item.url
                });
                menuContainer.append(menuItem);
                
                // Add separator
                if (index < data.length - 1) {
                    menuContainer.append(" | ");
                }
            });
        },
        error: function(xhr, status, error) {
            console.error(`Error loading ${jsonFile}:`, error);
        }
    });
}

$(document).ready(function() {
    loadMenu("main-menu", "components/main_menu.json");
    loadMenu("sub-menu", "components/sub_menu.json");
    loadMenu("footer-menu", "components/footer_menu.json");
});