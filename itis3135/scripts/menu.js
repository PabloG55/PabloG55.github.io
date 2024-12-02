function loadMenu(containerId, jsonFile) {
    $.ajax({
        url: jsonFile,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            const menuContainer = $('#' + containerId);
            const isFooterMenu = containerId === 'footer-menu'; // Check if it's the footer menu

            $.each(data, function(index, item) {

                const menuItem = $('<a>', {
                    text: item.name,        
                    href: item.url,         
                    target: isFooterMenu ? "_blank" : null 
                });

                menuContainer.append(menuItem);

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