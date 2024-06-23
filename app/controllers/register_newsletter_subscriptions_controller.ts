import type { HttpContext } from '@adonisjs/core/http'

export default class  RegisterNewsletterSubscriptionsController {

    async handle(ctx: HttpContext) {
        return {
            message: 'Hello World'
        }    
    }
}