import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-packages-item',
  templateUrl: './home-packages-item.component.html',
  styleUrls: ['./home-packages-item.component.scss']
})
export class HomePackagesItemComponent implements OnInit {
  basicPackage: string[] = ["Sitio Web","1 Idioma","Hasta 5 enlaces internos","Galería de imágenes","SEO básico", "Tema de Diseño Pro", "Servicio Web Master"]; 
  

  constructor() { }
  ngOnInit(): void {
  }

}
