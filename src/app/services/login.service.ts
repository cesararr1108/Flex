import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { URLAPP } from './shared';
import { DataUserLoginRespond } from '../components/shared/interfaces'
import { LocalStoreServiceService } from './local-store-service.service';
import { throwError } from 'rxjs';


@Injectable({providedIn: 'root'})
export class UsuarioServices {

  constructor(
    private httpClient: HttpClient,
    private storage:LocalStoreServiceService) { }

  login(usuario:string,clave:string){
     
  
    const datos = {
      usuario,
      clave
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<DataUserLoginRespond>( `${URLAPP}usuario/login`, datos, httpOptions);


  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      console.error('Ocurrió un error:', error.error.message);
    } else {
      // Error del lado del servidor
      console.error(
        `Código de error ${error.status}, ` +
        `mensaje: ${error.error}`);
    }
    // Devuelve un observable con un mensaje de error personalizado
    return throwError('Algo salió mal. Por favor, inténtalo de nuevo más tarde.');
  }


  estaAutenticado(){
    return this.storage.obtenerValor('dataUser')
  }
  
}