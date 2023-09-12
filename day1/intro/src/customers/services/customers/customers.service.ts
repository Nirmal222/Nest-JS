import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
    findCustomer() {
        return {
            email: "demo@gmail.com",
            createdAt: new Date()
        }
    }
}
