function newItem(){
    // Add toDo list
    let li = $('<li></li>') 
    let inputValue = $('#input').val(); 
    li.append(inputValue); 

    let list = $('#list');
    if (inputValue === '') {
        alert('You must write something');
    } else {
        list.append(li);
        $('#input').val('');
    }

    // Strike toDo list if done
    li.on('click', function(){
        li.toggleClass('strike'); 
    });

    // Delete toDo list
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);
    crossOutButton.on('click', deleteListItem);
    function deleteListItem() {
        li.addClass('delete')
    }

    //  Reorder toDo list
    list.sortable();
}