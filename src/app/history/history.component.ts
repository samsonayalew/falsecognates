import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../commons/header.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  public sLangs = {languages: []};
  public sTerms = {terms: []};

  constructor(public _HeaderService: HeaderService) {
    this._HeaderService.headerSize = 'small';
  }

  ngOnInit() {
    let sLangs = window.localStorage.getItem('search-languages');
    if (sLangs) {
      this.sLangs = JSON.parse(sLangs);
    }
    let sTerms = window.localStorage.getItem('search-terms');
    if (sTerms) {
      this.sTerms = JSON.parse(sTerms);
    }
  }

}
