import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { EpiList } from './epi/epi-list/epi-list';
import { EpiDetalhe } from './epi/epi-detalhe/epi-detalhe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EpiList, EpiDetalhe,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // protected readonly title = signal('Primeira aula de angular');
  titulo = "Sistema de controle de Epis";
  subtitulo = "Gestão des segurança do trabalho";
  descricao = "Aplicação para controle, monitoramento e conformidade dos equipamentos de proteção individual";
  // professor = "Elias Santos";
} 
