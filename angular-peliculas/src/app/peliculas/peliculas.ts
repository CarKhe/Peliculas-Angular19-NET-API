export interface PeliculasCrearDTO{
    titulo:string;
    fechLanzamiento: Date;
    trailer: string;
    poster?: File;
}

export interface PeliculasDTO{
    id:number;
    titulo:string;
    fechLanzamiento: Date;
    trailer: string;
    poster?: string;
}