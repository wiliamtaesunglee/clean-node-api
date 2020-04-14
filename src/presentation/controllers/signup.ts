import { HttpRequest, HttpResponse } from '../protocols/http';
import { badRequest } from '../helpers/http-helper'
import { MissingParamError } from '../protocols/errors/missing-param-error';

export class SignupController {
    handle (httpRequest: HttpRequest): HttpResponse {
        const requiredFilds = ['name', 'email']
        for(const field of requiredFilds) {
            if(!httpRequest.body[field]) return badRequest(new MissingParamError(field))
        }
        
    }
}