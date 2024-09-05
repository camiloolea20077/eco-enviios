import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../services/registro.service';
import { Registro } from '../../models/registro';


@Component({
  selector: 'app-registro',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class RegistroComponent implements OnInit {
  registros: Registro[] = [];

  constructor(private registroService: RegistroService) {}

  ngOnInit(): void {
    this.registroService.getRegistros().subscribe(data => {
      this.registros = data;
    });
  }

  addCliente(cliente: Registro): void {
    this.registroService.addRegistro(cliente).subscribe(newUsuario => {
      this.registros.push(newUsuario);
    });
  }

}