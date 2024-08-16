export default function Project(name) {
    this.name = name;
    this.projectContainer = [];

    this.addTodo = function(todo) {
        this.projectContainer.push(todo);
    };
}
