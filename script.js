

const tasksList = $('.tasks-container > ul');
const addTaskButton = $('.btn-container > button');


var addTaskToList = function()
{
    const taskName = $('#task-name').val();
    const taskPriority = $('[name="priority-level"]:checked').val();

    const taskElement = `<div class="task-item-container ${taskPriority}-priority">
                    <li class="task">
                        ${taskName}
                    </li>
                    <div class="task-priority-color-box"></div>
                </div>`;

    $(taskElement).appendTo(tasksList);
    $('#task-name').val('');sa
}


const form = $('form');
form.on('submit', function(e){
    e.preventDefault();

    addTaskToList();
});


tasksList.on('click', function(e){
    console.log(e.target)
    if (!e.target.classList.contains('task')) return;
    e.target.classList.add('task-done');
});