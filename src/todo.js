import { compareAsc, format } from "date-fns";
format(new Date(11, 1, 2014), "dd-MM-yyyy");
//=> '11-01-2014'

const dates = [
  new Date(11, 1, 2011),
  new Date(19, 6, 1908),
  new Date(5, 6, 2000),
];

export default function Todo(title,description,dueDate,priority,checkList){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checkList = checkList;
}