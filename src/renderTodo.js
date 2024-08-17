export default function renderTodo(arr){
    for(let i = 0; i < arr.length; i++){
            console.log(`Todo${i} Title: ${arr[i].title}, Description: ${arr[i].description}, DueDate: ${arr[i].dueDate}, Priority: ${arr[i].priority}, Checklist: ${arr[i].checkList}`)
    }
}