class Task {
    private id : number;
    private title : string;
    private description : string;
    private dueDate : Date;
    private completed : Boolean;


    constructor(taskInfo :{
        id : number;
        title: string;
        description: string;
        dueDate: Date;
    }){
        this.id = taskInfo.id;
        this.title = taskInfo.title;
        this.description = taskInfo.description;
        this.dueDate = taskInfo.dueDate;
        this.completed = false;
    }


    public complete(){
        this.completed = true
    }

    public inComplete(){
        this.completed = false
    }
}


const task1 = new Task({
    id:1,
    title:'Finish report ',
    description: 'Write quaterly report',
    dueDate: new Date("2120-03-25")
})

console.log(task1.complete())

console.log(task1)