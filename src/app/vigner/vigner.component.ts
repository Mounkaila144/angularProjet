import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-vigner',
  templateUrl: './vigner.component.html',
  styleUrls: ['./vigner.component.scss']
})
export class VignerComponent implements OnInit {
  text!: string;
  lgtext!: number;
  decalage!: number;
  crypto!: string;
  lblock!: number;
  clec!: string;
  cled!: string;
  d!:any[];

  constructor() {
  }
  trackByIndex(index: number, obj: any): any {
    return index;
  }
  ngOnInit(): void {
    this.text = 'Bonjour Monsieux Sirajie je te transmetre la lettre ci dessous'
    this.lgtext = this.text.length
    this.crypto = ''
    this.clec = 'Mado'
    this.cled = 'Mad'
    this.d=Array(this.lblock)
  }

  caractereToNumber([...n]: string): number[] {
    let k = []
    for (let i in n)
      k.push(n[i].charCodeAt(0) - 65)
    return k
  }

  cesarnb(n: string, k: number) {
    let l = this.caractereToNumber(n)
    let h = []
    for (let i in l)
      h.push((l[i] + k) % 26)
    return h
  }

  cesarchr(n: string, k: number) {
    let l = this.cesarnb(n, k)
    let j = []
    for (let i in l)
      j.push(String.fromCharCode(l[i] + 65))
    let str = j.join("")
    return str
  }

  numberToCaractere(n: number[]): string {
    let k = []
    for (let i in n)
      k.push(String.fromCharCode(n[i] + 65))
    let str = k.join("")
    return str
  }

  cesarDeryptage(n: string, k: number) {
    let l = this.caractereToNumber(n)
    let h = []
    for (let i in l)
      h.push((((l[i] - k) % 26) + 26) % 26)

    let m = this.numberToCaractere(h)
    return m
  }

  deryptage(n: string, i: number) {
    let k: string
    k = this.cesarDeryptage(n, i)
    return k
  }

  vignereChiffrement(text: string, cle: string) {
    let c=this.caractereToNumber(cle)
    let n = this.caractereToNumber(text)
    let k = []
    let lgcle = c.length
    if (lgcle <= text.length) {
      for (let i = 0; i <= text.length; i++) {
        k.push(c)
      }
      let f = k.flat(1)
      f.length = text.length
      let p = []
      for (let i = 0; i <= n.length; i++) {
        if (n[i]===-33){
          p.push(-33)
        }
        else {
          p.push((f[i] + n[i]) % 26)
        }

      }
      p.pop()
      return this.numberToCaractere(p)
    } else {
      return "La longeur de votre clé est plus long que le text que vous avez entrez"
    }


  }

  vignereDehiffrement(text: string, cle: string) {
    let c=this.caractereToNumber(cle)
    let n = this.caractereToNumber(text)
    let k = []
    let lgcle = c.length
    if (lgcle <= text.length) {
      for (let i = 0; i <= text.length; i++) {
        k.push(c)
      }
      let f = k.flat(1)
      f.length = text.length
      let p = []
      for (let i = 0; i <= n.length; i++) {
        if (n[i]===-33){
          p.push(-33)
        }
        else{
          p.push((((n[i]-f[i]) % 26) + 26) % 26)
        }

      }
      p.pop()
      return this.numberToCaractere(p)
    } else {
      return "La longeur de votre clé est plus long que le text que vous avez entrez"
    }


  }


  submit(form: NgForm) {

  }

  log(dElement: any) {
    console.log(dElement)

  }


}
