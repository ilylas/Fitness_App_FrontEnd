export class Exercice {
    public id:Number;
    public name:String;
    public duration:String;
    public muscleGroup:String;
    public image:String;
    public constructor(id:Number, name:String, duration:String, muscleGroup :String,image:String){
        this.id=id
        this.name=name
        this.duration=duration
        this.muscleGroup=muscleGroup
        this.image=image
    }
}
