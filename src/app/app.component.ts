import { Component } from '@angular/core';
import informacoes_aluno from './arquivo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atividade-pratica';

  alunos: Array<any> = informacoes_aluno;
}
