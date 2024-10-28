import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cmp01-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cmp01-data-binding.component.html',
  styleUrl: './cmp01-data-binding.component.css'
})
export class Cmp01DataBindingComponent {

  // string, number, boolean, any, null, undefined, Array<number>, number[]
  nombre: string = 'Ángel'
  // fecha: Date = new Date(2024, 1, 12)
  logoAngular: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbOFmjGchTMwQriXqezOovYKqXWK3YXUnFlQ&s'

  getNombre(): string {
    return this.nombre
  }

  saludar(nombre: string) {
    alert('Hola ' + nombre)
  }

  cambiarNombre(event: any) {
    // this.nombre = 'Mike'
    console.log(event)
    this.nombre = event.target.value
  }

}
