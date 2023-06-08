import { Component } from '@angular/core';
import { autobuses } from '../_Modules/autobuses';
import { ServicioBackService } from '../servicio-back.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {
  Au:autobuses=new autobuses("",0);
  A:autobuses[]=[]


  constructor(private service:ServicioBackService) {
    this.service.getAutobuses().subscribe(
       data => {
         this.A = data;
       });
    }

}
