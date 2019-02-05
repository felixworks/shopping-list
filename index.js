function addItem() {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        let itemLabel = $('#shopping-list-entry').val();
        let itemContent = `
        <li>
            <span class="shopping-item">${itemLabel}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
            </div>
        </li>`;
        $('.shopping-list').append(itemContent);
        $('#shopping-list-entry').val('');
    });
}

function checkOrUncheckItem() {
    $('.shopping-list').on('click','.shopping-item-toggle', function(event) {
        $(this).parent().siblings('.shopping-item').toggleClass('shopping-item__checked');
        console.log('Check function has run.');
    });
}

function deleteItem() {
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).parents('li').remove();
    });
}

$(addItem);
$(checkOrUncheckItem);
$(deleteItem);