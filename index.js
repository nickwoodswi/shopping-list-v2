
$('#js-shopping-list-form').submit(function (event) {
    event.preventDefault();
    const input = $(this).find('#shopping-list-entry'); 
    $('.shopping-list').append(
        `<li>
            <span class="shopping-item">${input.val()}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
            </div>
        </li>`
    );
    input.val('');
});
    
$('ul').on('click', 'li .shopping-item-controls .shopping-item-toggle', function(){
    $(this).parent().siblings('span').toggleClass('shopping-item__checked');
});

$('ul').on('click', 'li .shopping-item-controls .shopping-item-delete', function(){
    $(this).closest('li').remove();
})