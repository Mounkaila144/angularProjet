import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cesar',
  templateUrl: './cesar.component.html',
  styleUrls: ['./cesar.component.scss']
})
export class CesarComponent implements OnInit {
  text!:string;
  crypto!:string;
  clec!:number;
  cled!:number;
  d!:[];
  constructor() { }

  ngOnInit(): void {
  this.text='BONJOUR'
  this.crypto=''
  this.clec=0
  this.cled=0
  }

 caractereToNumber([...n]:string):number[]{
    let k=[]
   for (let i in n)
     k.push(n[i].charCodeAt(0)-65)
return k
 }

 cesarnb(n:string,k:number){
    let l=this.caractereToNumber(n)
   let h=[]
    for (let i in l)
      if (l[i]===-33){
        h.push(-33)
      }
      else{
        h.push((l[i]+k)%26)
      }
    return h
 }
  cesarchr(n:string,k:number){
    let l=this.cesarnb(n,k)
    let j=[]
    for (let i in l)
      j.push(String.fromCharCode(l[i]+65))
    let str=j.join("")
    return str
 }

 numberToCaractere(n:number[]):string{
    let k=[]
   for (let i in n)
     k.push(String.fromCharCode(n[i]+65))
   let str=k.join("")
return str
 }
  cesarDeryptage(n:string,k:number){
    let l=this.caractereToNumber(n)
    let h=[]
    for (let i in l)
      if (l[i]===-33){
        h.push(-33)
      }
    else{
        h.push((((l[i]-k)%26)+26)%26)
      }
    let m=this.numberToCaractere(h)
    return m
  }
  deryptage(n:string,i:number){
let k:string
     k=this.cesarDeryptage(n,i)
    return k
  }

}
