import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IEntradaBlog } from '../../interfaces/ientrada-blog.interface';


@Component({
  selector: 'app-blog',
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  nuevaNoticia: IEntradaBlog = {
    titulo: '',
    imagen: '',
    texto: '',
    fechaPublicacion: ''
  };
  noticias: IEntradaBlog[] = [
    {
      titulo: 'Noticia 1',
      imagen: 'https://placeholder.co/150X150',
      texto: 'Texto de la noticia 1',
      fechaPublicacion: '10-04-2025'
    },
    {
      titulo: 'Noticia 2',
      imagen: 'https://placeholder.co/150X150',
      texto: 'Texto de la noticia 2',
      fechaPublicacion: '03-07-2025'
    }
  ];

  agregarNoticia() {
    if (this.nuevaNoticia.titulo && this.nuevaNoticia.imagen && this.nuevaNoticia.texto && this.nuevaNoticia.fechaPublicacion) {
      this.nuevaNoticia.fechaPublicacion = this.formatearFecha(this.nuevaNoticia.fechaPublicacion);
      this.noticias.push({ ...this.nuevaNoticia });
      this.nuevaNoticia = { titulo: '', imagen: '', texto: '', fechaPublicacion: '' };
      console.log('Noticia agregada:', this.noticias);
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }

  formatearFecha(cadenaFecha: string): string {
    const fecha = new Date(cadenaFecha);
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const anyo = fecha.getFullYear();
    return `${dia}-${mes}-${anyo}`;
  }
}