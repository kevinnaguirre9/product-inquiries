/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import RegisterNewsletterSubscriptionController from '#controllers/register_newsletter_subscriptions_controller';

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('newsletter/subscriptions', [RegisterNewsletterSubscriptionController])
