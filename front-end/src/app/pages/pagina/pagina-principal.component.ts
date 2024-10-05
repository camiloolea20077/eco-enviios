import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
@Component({
  selector: 'app-pagina',
  standalone: true,
  templateUrl:'./pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css'],
  imports: [
    MenubarModule, 
    ButtonModule, 
    InputTextModule, 
    CarouselModule, 
    CardModule, 
    MenuModule],
})
export class PaginaPrincipalComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

  }

}
