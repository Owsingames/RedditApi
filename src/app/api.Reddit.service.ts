import {Injectable} from "@angular/core";
import {HttpClient} from "@Angular/common/http";

@Injectable()
export class ApiTestService{
    apiBaseUrl:string = "https://www.reddit.com/r/";
    constructor(private http: HttpClient) {}

    getPost(sub:string):any{
        let url = this.apiBaseUrl + sub + "/.json";
        return this.http.get(url); 
    }
}