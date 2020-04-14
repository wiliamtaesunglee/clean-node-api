import { HttpRequest, HttpResponse } from '../protocols/http'
import { badRequest } from '../helpers/http-helper'
import { MissingParamError } from '../errors/missing-param-error'
import { Controller } from '../protocols/controller'

export class SignupController implements Controller {
    handle (httpRequest: HttpRequest): HttpResponse {
        const requiredFilds = ['name', 'email', 'password', 'passwordConfirmation'] 
        for(const field of requiredFilds) {
            if(!httpRequest.body[field]) return badRequest(new MissingParamError(field))
        }
        
    }
}