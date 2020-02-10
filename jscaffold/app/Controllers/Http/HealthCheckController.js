'use strict'

class HealthCheckController {

    async index(){
        return {
            healthApp: 'Good :)'
        }
    }
}

module.exports = HealthCheckController
