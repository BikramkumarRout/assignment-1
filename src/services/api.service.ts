import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) { }

    // on page load
    all(): any {
        return this.http.get<any>(
            `https://api.spacexdata.com/v3/launches?limit=100`
        );
    }

    launchsuccessFilter(isLaunchSuccess: boolean): Observable<any> {
        return this.http.get<any>(
            `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${isLaunchSuccess}`
        );
    }
    launchLandFilter(isLandSuccess: boolean, isLaunchSuccess: boolean): Observable<any> {
        return this.http.get<any>(
            `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${isLaunchSuccess}
            &land_success=${isLandSuccess}`
        );
    }

    landFilter(isLandSuccess: boolean): Observable<any> {
        return this.http.get<any>(
            `https://api.spacexdata.com/v3/launches?limit=100&land_success=${isLandSuccess}`
        );
    }


    getLaunchProgramsByYear(year: any, isLaunchSuccess: boolean, isLandSuccess: boolean): Observable<any> {
        return this.http.get<any>(`https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${year}`);
    }
}
