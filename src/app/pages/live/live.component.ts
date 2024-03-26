
import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { ApiCallService } from '../../services/api-call.service';
import { CommonModule, NgFor } from '@angular/common';
import { MatchCardComponent } from "../../components/match-card/match-card.component";
@Component({
    selector: 'app-live',
    standalone: true,
    templateUrl: './live.component.html',
    styleUrl: './live.component.css',
    imports: [CommonModule,NgFor, MatchCardComponent]
})
export class LiveComponent implements OnInit{

  liveMatches:any 
  constructor(private _api:ApiCallService){}
  ngOnInit(): void {
    this.loadLiveMatches();
  }

  private loadLiveMatches() {
    this._api.getLiveMatches().subscribe({
      next: data => {
        console.log(data);
        this.liveMatches = data
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
