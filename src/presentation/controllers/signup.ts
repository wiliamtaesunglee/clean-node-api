import { HttpRequest, HttpResponse } from '../protocols/http';
import { badRequest } from '../helpers/http-helper'

export class SignupController {
    handle (httpRequest: HttpRequest): HttpResponse {

        if (!httpRequest.body.name) {
            return badRequest(new Error('Missing params: name'))
        }
        if (!httpRequest.body.email) {
            return badRequest(new Error('Missing params: email'))
        }
        
    }
}