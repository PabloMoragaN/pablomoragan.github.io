import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';



@Injectable()

/*export class SpotifyService {

   public url: string;

   constructor(public _http: HttpClient) {

   }

   getUser(id){
    return this._http.get('https://api.spotify.com/v1/users/'+id);
    }

}*/




export class SpotifyService {
    constructor(private http: HttpClient) {
    }
  
    // Para  consulta generica
    getQuery(query: string) {
      const url = `https://api.spotify.com/v1/${query}`;

      const headers = new HttpHeaders({
        Authorization:
          "Bearer BQAyYx7VUzbo6HDESwHhIZhCJurIQSlX6NIMNP-gKlPXUMlc2b-j2Ts2B9N7maWGe2Iu9vnu-Nk8QGEgPWdcEkW2V3jnEB8PLhw4RpO71oeXeTd7rc65MI9KSU6fI0vqL8_aU8qxUmdSjDg"
      });
  
      return this.http.get(url, { headers });
    }

  /*
    getNewReleases() {
      return this.getQuery("browse/new-releases?limit=20").pipe(
        map(data => data["albums"].items)
      );
    }
  
    // Referente al Search
  
    getArtistas(termino: string) {
      return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
        map(data => data["artists"].items)
      );
    }
  
    getArtista(id: string) {
      return this.getQuery(`artists/${id}`);
      // .pipe( map( data => data['artists'].items));
    }
  
    getTopTracks(id: string) {
      return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
        map(data => data["tracks"])
      );
    }*/



    getUser(id){
        return this.getQuery('users/'+id+'/playlists');
        }
  }
