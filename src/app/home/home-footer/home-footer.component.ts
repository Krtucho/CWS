import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.scss']
})
export class HomeFooterComponent implements OnInit {

  home = ["Redes Sociales", "Contacto", "F.A.Q."];
  services = ["Desarrollo", "WebHosting"];
  us = ["Nuestro Equipo", "Portafolio", "Por que Elegirnos"];
  packages = ["Básico", "Regular", "Premium"];

  constructor() { }

  ngOnInit(): void {
  }

}
