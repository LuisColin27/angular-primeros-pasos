import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroeDescription() : string {
    return `${this.name} - ${this.age}`;
  }

  changedHeroe(): void {
    this.name = 'Hawk Eye';
  }

  changedAge(): void {
    this.age = 40;
  }

  resetForm() : void {
    this.name = 'ironman';
    this.age = 45;
  }
}
