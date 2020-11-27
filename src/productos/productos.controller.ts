import { Controller,Get,Post,Put,Delete, Res, HttpException, HttpStatus, Body } from '@nestjs/common';
import { CreateProductosDTO } from './dto/productos.dto';

@Controller('productos')
export class ProductosController {

    @Get('get')
    getProductos(){
        return true;
    }

    @Post('/create')
    createPost(@Res() res,@Body() createProductosDTO:CreateProductosDTO){
        console.log(createProductosDTO)
        return res.status(HttpStatus.OK).json({
            message: 'recibido',
            data:createProductosDTO
        })
    }

    @Put('putProductos')
    putProductos(){
        return true;
    }

    @Delete('deleteProducto')
    deleteProductos(){
        return true;
    }
}
