import { Injectable } from "@angular/core";
import { HomeModule } from "../home.module";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, throwError } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient){}

    private getStandardOptions(){
        return {
            headers: new HttpHeaders({
                'Content-Type': "application/json",
            },
        )};
    }

    private getAuthenticatedOptions(){
        return {
            headers: new HttpHeaders({
                'Content-Type': "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        )};
    }

    private handleError(error: HttpErrorResponse){
        let message: string = ""
        if(error.status === 0){
            message = "There is an issue with the client or network: "+error.error;
        }else if (error.status ===401){
            message = "Unauthorized action, please authenticate to proceed"
        }else{
            message = error.error
        }

        console.error(error.error)
        return throwError(()=> new Error(message))
    }

    authenticate(data: any){
        const options = this.getStandardOptions();

        return this.http.post(environment.apiUrl+"Authentication", data, {...options, responseType: 'text'});
    }

    addUser (data: any) {

        const options = this.getAuthenticatedOptions();
        
        //TODO: Change the URL to one from environment
        return this.http.post(environment.apiUrl+"Users", data, options).pipe(catchError(this.handleError))
    }

    deleteUser (username: string){
        const options = this.getAuthenticatedOptions();

        return this.http.delete(environment.apiUrl+"Users/"+username, options).pipe(catchError(this.handleError))
    }

    getUsers(){
        const options = this.getStandardOptions();
        return this.http.get(environment.apiUrl+"Users", options)
    }

    updateUser(data: any, username: string){
        const options = this.getAuthenticatedOptions();

        return this.http.put(environment.apiUrl+"Users/"+username, data, options).pipe(catchError(this.handleError))
    }
}