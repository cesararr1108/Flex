import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioServices } from 'src/app/services/login.service';
import { DataUserLoginRespond } from '../shared/interfaces';
import { LocalStoreServiceService } from 'src/app/services/local-store-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  formulario:FormGroup= new FormGroup({}) ;

  constructor( private usuario:UsuarioServices,
    private fg: FormBuilder,
    private local: LocalStoreServiceService,
    private router: Router){
    this.crearFormulario();
  }
  
  crearFormulario(){
    this.formulario=this.fg.group({
      usuario:['',[Validators.required,Validators.minLength(5)]],
      clave:['',Validators.required]
    })
  }

  iniciarSesion(){
 
    this.usuario.login(this.formulario.value.usuario,this.formulario.value.clave)
    .subscribe(resp=>{
      
        if(resp.existe ){ 
            this.local.guardarValor('localUser',resp.data);
            this.router.navigateByUrl('/home')
        }
    })

    

  }

}
