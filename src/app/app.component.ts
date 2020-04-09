import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fornInput:any ={};
  selectedDept:string;
  selectedEvent:string;
  formSelectedDept:string;
  selectedMeetingRoom: string;
  upcommingEventArray =[];

  departmentArr = ['IT', 'HR', 'Support','Finance'];
  meetingRoom =['room1', 'room2', 'room3', 'room4'];

  eventArr = [
  {'event': 'Create new Event', value:'new Event'},
  {'event': 'upcomming event', value:'upcomming_event'},

  ];
  index: any;
  editFlag: boolean;
  copyUpcommingArr: any[];
  errorFlag: boolean;
  successflag: boolean;

  ngOnInit(){
    this.upcommingEventArray = [];
    this.copyUpcommingArr = [];
    this.errorFlag =  false;
    this.successflag = false;
  }

  formSubmit(){
    
    console.log(this.fornInput)
    if(this.index == undefined){
   
      this.upcommingEventArray.push(this.fornInput);
      this.copyUpcommingArr =  this.upcommingEventArray;
      this.fornInput ={};
    } else {
     this.upcommingEventArray[this.index] = this.fornInput;
     this.copyUpcommingArr =  this.upcommingEventArray;
    this.index = undefined
      this.fornInput ={};
      this.editFlag = false;
    }
   
  }
  editdata(i){
    this.index = i;
   this.fornInput = this.upcommingEventArray[i]
   this.editFlag =  true;
  }
  getValue(){
    this.successflag = false;
  }

  departmentSelceted(){
    this.upcommingEventArray =this.copyUpcommingArr;
    let temp =   this.copyUpcommingArr ;
    if( this.copyUpcommingArr.length > 0){
let a = temp.filter((ele)=> ele.formSelectedDept == this.selectedDept);
console.log(a)

this.upcommingEventArray =a;
    }
  }

  serch(e){
    this.upcommingEventArray =this.copyUpcommingArr;
    let temp =   this.copyUpcommingArr ;
    if( this.copyUpcommingArr.length > 0){
let a = temp.filter((ele)=> {
  if (ele.trainingName.includes(e) && ele.formSelectedDept == this.selectedDept)
{
  return ele;
}});
console.log(a)

this.upcommingEventArray =a;
    }
  }

  validation(){
  if (this.fornInput.hasOwnProperty('selectedMeetingRoom') && this.fornInput.hasOwnProperty('trainingName') && this.fornInput.hasOwnProperty('Duration')
    && this.fornInput.hasOwnProperty('startDate') && this.fornInput.hasOwnProperty('endDate') && this.fornInput.hasOwnProperty('formSelectedDept')){
      this.errorFlag =  false;
      this.formSubmit();
      this.departmentSelceted();
      this.successflag = true;
    } else {
      this.errorFlag =  true;
      this.successflag = false;
    }
  }
 
}
