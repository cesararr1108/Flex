export interface DataUserLoginRespond {
    existe :boolean,
    data:[
      id:string,
      usuario: string,
      nombres: string,
      clave :string,
      email:string,
      avatar:string,
      foto:string
    ]

    // ... otras propiedades
  }