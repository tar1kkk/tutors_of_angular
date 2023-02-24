import { IProduct } from './../models/product';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, delay } from "rxjs";

@Injectable({
	providedIn: 'root',
})

export class ProductsService {
	constructor(private http: HttpClient) {

	}
	getAll(): Observable<IProduct[]> {
		return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
			params: {
				limit: 5
			}
		})
	}
}