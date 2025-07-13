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
      titulo: `Un coche atropella a un motero en un semáforo y luego pisa a fondo. 
      Lo que no sabía es que llevaba una cámara grabando en el casco, y ahora irán a juicio`,
      imagen: 'https://img.remediosdigitales.com/0b1232/guante/1366_2000.jpeg',
      texto: `Un motorista detenido en un semáforo fue embestido por detrás y arrastrado varios metros por un coche en Riverside (California), 
      mientras lo grababa todo con su cámara de casco. Ahora, ese mismo vídeo será clave en el juicio contra el conductor. En la grabación, 
      difundida por medios estadounidenses y ampliamente compartida en redes sociales, se ve cómo un Nissan Altima negro acelera 
      repentinamente y golpea la moto por detrás, empujando al motorista y a su vehículo sobre la acera, sin frenar en ningún momento. 
      El impacto lo inmoviliza durante varios segundos bajo el coche... A propósito.`,
      fechaPublicacion: '10-07-2025'
      
    },
    {
      titulo: 'En Reino Unido van a empezar a multar a los moteros que rueden en grupo por "incívicos", y bastará solo con que vayan dos',
      imagen: 'https://img.remediosdigitales.com/087f05/moto-1-2025/1366_2000.jpeg',
      texto: `Una ciudad británica quiere prohibir las rutas en moto cuando circulen más de dos vehículos juntos. 
      El Ayuntamiento de Newcastle-under-Lyme, en el centro de Inglaterra, 
      ha propuesto una medida dentro de una "Public Spaces Protection Order" (PSPO) 
      que busca restringir las reuniones de vehículos en vías públicas y espacios abiertos.
      Si se aprueba, cualquier grupo de dos o más vehículos, incluyendo motos, necesitará una autorización oficial 
      para reunirse, bajo amenaza de multa. 100 libras por andar en moto en grupo`,
      fechaPublicacion: '11-07-2025'
    }
  ];

  agregarNoticia() {
    if (this.nuevaNoticia.titulo && this.nuevaNoticia.imagen && this.nuevaNoticia.texto && this.nuevaNoticia.fechaPublicacion) {
      this.nuevaNoticia.fechaPublicacion = this.formatearFecha(this.nuevaNoticia.fechaPublicacion);
      this.noticias.unshift({ ...this.nuevaNoticia });
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