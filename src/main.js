// Task class
class Task {
    constructor(title, description) {
      this.title = title;
      this.description = description;
      this.completed = false;
    }
  }
  
  // Function to add a new task
  function addTask(event) {
    event.preventDefault();
  
    const titleInput = document.getElementById('titleInput');
    const descriptionInput = document.getElementById('descriptionInput');
  
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
  
    if (title === '') {
      alert('Please enter a title for the task.');
      return;
    }
  
    const task = new Task(title, description);
    tasks.push(task);
  
    renderTasks();
    titleInput.value = '';
    descriptionInput.value = '';
  }
  
 