import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
    users = [
        {
            id: 1,
            email: "nirmal@gmail.com",
            createdAt: new Date(),
        },
        {
            id: 2,
            email: "bannu@gmail.com",
            createdAt: new Date(),
        },
    ] 
    findCustomerById(id:number){
        return this.users.find((user)=>user.id===id);
    }
}
