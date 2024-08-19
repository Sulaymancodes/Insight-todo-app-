export default function Todo(title,description,dueDate,priority,checkList){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    return{
      title,
      description,
      dueDate,
      priority
    }
}