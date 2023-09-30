import { Controller, Get, Req, Res, Param, ParseIntPipe, HttpException } from '@nestjs/common';
import { CustomersService } from 'src/customers/services/customers/customers.service';
import { Request, Response } from 'express';

@Controller('customers')
export class CustomersController {
    constructor(private customerService: CustomersService) { }
    @Get(":id")
    getCustomer(
        @Param("id", ParseIntPipe) id: number,
        @Req() req: Request,
        @Res() res: Response,) {
        const customer = this.customerService.findCustomerById(id);
        customer ? res.send(customer) : res.status(404).send({ msg: "Resource not found" });
    }

    @Get("/search/:id")
    searchCutomerById(
        @Param("id", ParseIntPipe) id: number,
    ) {
        const customer = this.customerService.findCustomerById(id);
        if (customer) return customer;
        else throw new HttpException("Resource not found",404)
    }
}  
