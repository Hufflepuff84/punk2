import { Component, OnInit, ViewChild } from '@angular/core';
import {IBeer} from '../../interface/ibeer';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {BeerService} from '../../service/beer.service'

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  displayedColumns: string[] = ['id', 'img', 'name', 'tagline', 'description', 'abv'];
  dataSource: MatTableDataSource<IBeer>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  count = 25;

  constructor(private beerService: BeerService ) { }

  async ngOnInit() {
    const data = await this.beerService.getAll();

    this.dataSource= new MatTableDataSource(data);
    this.dataSource.sort= this.sort;

  }
  applyFilter(filter: string){
    this.dataSource.filter = filter.trim().toLowerCase();
  }
  async getnewBeer() { 
    const data = await this.beerService.getbeersbycount(++this.count);
     this.dataSource = new MatTableDataSource(data);
  
  }
}
// testing