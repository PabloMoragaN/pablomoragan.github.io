import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [SpotifyService]
})
export class AboutComponent implements OnInit {

  public playlists;
  public isReady=false;

  constructor(private _spotifyService: SpotifyService) { }

  spinnerValue(value) {
    return value + "%";
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
