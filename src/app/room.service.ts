import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  //private baseUrl = 'https://app-meetingroom.herokuapp.com/meeting-room';
  private baseUrlList = 'https://app-meetingroom.herokuapp.com/meeting-room/api/v1/rooms';
  private baseUrlGet = 'https://app-meetingroom.herokuapp.com/meeting-room/api/v1/room-id';
  private baseUrlDel = 'https://app-meetingroom.herokuapp.com/meeting-room/api/v1/delete-room';
  private baseUrlAdd = 'https://app-meetingroom.herokuapp.com/meeting-room/api/v1/new-room';
  private baseUrlUp = 'https://app-meetingroom.herokuapp.com/meeting-room/api/v1/update-room';

  constructor(private http: HttpClient) { }

  getRoom(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlGet}/${id}`);
  }

  createRoom(room: Object): Observable<Object> {
    return this.http.post(`${this.baseUrlAdd}`, room);
  }

  updateRoom(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrlUp}/${id}`, value);
  }

  deleteRoom(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrlDel}/${id}`, { responseType: 'text' });
  }

  getRoomsList(): Observable<any> {
    return this.http.get(`${this.baseUrlList}`);
  }
}
