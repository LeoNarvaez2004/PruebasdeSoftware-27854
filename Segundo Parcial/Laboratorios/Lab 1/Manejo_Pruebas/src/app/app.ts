import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculator } from './calculator';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Manejo_Pruebas');
  protected readonly userInput = signal(''); // Signal for input test

  ngOnInit(): void {
    let calculator = new Calculator();
    let result = calculator.multiply(3, 5);
    console.log(result === 15);
    console.log(result !== 9);

    let result2 = calculator.divide(6, 3);
    console.log(result2 === 2);
    console.log(result2 !== 3);

    let result3 = calculator.divide(6, 0);
    console.log(result3 === null);
    console.log(result3 !== 3);


  }
}
