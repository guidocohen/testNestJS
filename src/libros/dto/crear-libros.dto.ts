import {IsNumber, IsPositive, IsString, Min, Max, IsNotEmpty} from 'class-validator';

export class CrearLibroDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;
    
    @IsString()
    @IsNotEmpty()
    autor: string;

    @IsNumber()
    @IsPositive()
    @Min(1)
    @Max(1200)
    pags: number;
}