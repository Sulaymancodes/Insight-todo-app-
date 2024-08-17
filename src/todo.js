export default function Todo(title,description,dueDate,priority,checkList){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checkList = checkList;
    return{
      title,
      description,
      dueDate,
      priority,
      checkList
    }
}