import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreServiceService {

  constructor() { }
  // Método para guardar un valor en el localStorage
  guardarValor(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Método para obtener un valor del localStorage
  obtenerValor(key: string): any {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  // Método para eliminar un valor del localStorage
  eliminarValor(key: string): void {
    localStorage.removeItem(key);
  }

  // Método para eliminar todos los valores del localStorage
  limpiarLocalStorage(): void {
    localStorage.clear();
  }

  estaAutenticado(localNme:string):boolean{
      return this.obtenerValor(localNme)!=undefined ? true:false
  }


}
