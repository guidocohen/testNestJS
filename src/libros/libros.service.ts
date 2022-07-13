import { Injectable } from '@nestjs/common';
import { Libro } from './interfaces/libros.interface';

@Injectable()
export class LibrosService {
    private readonly libros: Libro[] = [];

    private findId(id: number): number {
        let indice: number;
        this.libros.forEach(function(libro: Libro, index:number){
            if(libro.libro_id === id){
                indice = index;
            }
        })
        return indice;
    }

    //Función para crear libro
    crearLibro(infoLibro){
        // Crear función para agregar ID
        let lastId: number;

        function addId(matrixLibros): number {
            if (matrixLibros.length > 0) {
                lastId = matrixLibros[matrixLibros.length - 1].libro_id + 1;
                return lastId;
            } else {
                return lastId = 1;
            }       
        }

        // Función push para nuestro array
        const nuevoLibro = {
            libro_id: addId(this.libros),
            ...infoLibro
        }
        this.libros.push(nuevoLibro);
    }

    // Función para consultar todos los libros
    listarTodo(): Libro[] {
        return this.libros;
    }

    // Función para consultar un libro específico
    infoLibro(id: number):Libro{
        return this.libros[this.findId(id)];
    }

    // Función para editar un libro
    editarLibro(id:number,infoLibro:Libro): void {
        const indice = this.findId(id);
        this.libros.splice(indice,1,infoLibro);
    }

    // Función para eliminar un libro
    eliminarLibro(id:number): void {
        const indice = this.findId(id);
        this.libros.splice(indice,1);
    }
}
