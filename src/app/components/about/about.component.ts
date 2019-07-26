import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { animate, transition, state, style, trigger } from '@angular/animations';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [SpotifyService],
  animations:[trigger('fadeInOut', [
    state('void', style({
      opacity: 0
    })),
    transition('void <=> *', animate(1000)),
  ])]
})
export class AboutComponent implements OnInit {

  public playlists;
  public isReady=false;
  currentState = 'initial';


  constructor(private _spotifyService: SpotifyService) { }

  spinnerValue(value) {
    return value + "%";
  }

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  async ngOnInit() {

   // await this.getUserSpotify();
  }



  async getUserSpotify() {

    await this._spotifyService.getUser('alter345').subscribe(result => {


      if (result) {
        this.playlists = result;
        this.isReady=true;

        console.log(this.playlists.items);

      }
    }, error => { console.log(error); });

  }

}
