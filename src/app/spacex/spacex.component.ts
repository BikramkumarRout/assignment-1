import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-spacex',
  templateUrl: './spacex.component.html',
  styleUrls: ['./spacex.component.css']
})
export class SpacexComponent implements OnInit {
  Developer = 'Bikram Kumar Rout';
  spacedata: any;
  LaunchSuccessFilter: any;
  LaunchLandFilter: any;
  all: any;
  years = [];
  isLauncSuccess = false;
  isLandSuccess = false;
  selectedYear;

  constructor(
    private mainService: ApiService
  ) { }


  ngOnInit(): void {
    this.allFilter();
    for (let i = 2006; i <= 2020; i++) {
      this.years.push(i);
    }
  }

  allFilter(): void {
    this.mainService.all().subscribe((data) => {
      this.spacedata = data;
    });
  }

  filterByYear(year): void {
    this.selectedYear = year;
    this.mainService.getLaunchProgramsByYear(year, this.isLauncSuccess, this.isLandSuccess).subscribe((data) => {
      this.spacedata = data;
    });
  }

  launchFilter(isLaunchSuccess: string): any {

    if (isLaunchSuccess === 'True') {
      this.isLauncSuccess = true;
    } else {
      this.isLauncSuccess = false;
    }

    this.mainService.launchsuccessFilter(this.isLauncSuccess).subscribe((result) => {
      this.spacedata = result;
    });

  }

  landFilter(isLandSuccess: string): any {

    if (isLandSuccess === 'True') {
      this.isLandSuccess = true;
    } else {
      this.isLandSuccess = false;
    }
    this.mainService.landFilter(this.isLandSuccess).subscribe((result) => {
      this.spacedata = result;
    });
  }
}
