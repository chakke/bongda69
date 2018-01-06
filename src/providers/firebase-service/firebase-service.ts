import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireDatabase } from "angularfire2/database";
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";


@Injectable()
export class FirebaseServiceProvider {
  colectionDetail: any = [];
  constructor(
    // public http: HttpClient,
    public angularFirestore: AngularFirestore
  ) {
  }

  public getCollection(collection: string){
    return this.angularFirestore.collection(collection);
  }

  public getCollectionOrderBy(collection: string, key: string){
    return this.angularFirestore.collection(collection, ref => ref.orderBy(key));
  }


}
