import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { CrearLibroDto } from './dto/crear-libros.dto';
import { LibrosService } from './libros.service';
import { info } from 'console';
import { Libro } from './interfaces/libros.interface';

@Controller('libros')
export class LibrosController {
    constructor(private librosService: LibrosService) {};

    @Get()
    buscarLibros():Libro[] {
        return this.librosService.listarTodo();
    }

    @Get(':id')
    infoLibro(@Param('id') id:string): Libro {
        return this.librosService.infoLibro(parseInt(id));
        // return `Esta es la información del libro #${id}`;
    }

    @Post()
    crearLibro(@Body() infoLibro: CrearLibroDto) {
        this.librosService.crearLibro(infoLibro);
        // return `Un nuevo libro ha sido creado. Este libro tiene ${infoLibro.pags} páginas`;
    }

    @Put(':id')
    editarLibro(@Param('id') id:string, @Body() actualizarLibro: Libro) {
        this.librosService.editarLibro(parseInt(id), actualizarLibro);
        //return `El libro de id #${id} se ha actualizado`;
    }

    @Delete(':id')
    eliminarLibro(@Param('id') id:string) {
        this.librosService.eliminarLibro(parseInt(id));
        // return `El libro de id #${id} se ha eliminado`;
    }
}
