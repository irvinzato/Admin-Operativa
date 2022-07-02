import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { CatalogsService } from './../../services/catalogs.service';
import { CashDifferencesService } from './../../services/cash-differences.service';
import { CapturingOperationsPNC, CashDifference } from 'src/app/shared/models/cashDifference.interface';

import { OperationsCaptureDialogComponent } from './operations-capture-dialog/operations-capture-dialog.component';
import { Branches, Brands, Routes } from 'src/app/shared/models/catalogs.interface';
import { PagesCashDifference } from './../../shared/models/cashDifference.interface';

@Component({
  selector: 'app-cash-differences',
  templateUrl: './cash-differences.component.html',
  styleUrls: ['./cash-differences.component.scss']
})

export class CashDifferencesComponent implements OnInit {
  brands: Brands[] = [];
  branches: Branches[] = [];
  routes: Routes[] = [];
  displayedColumns: string[] = ['internalId', 'date', 'brandName', 'branchName', 'routeName', 'groupName', 'gapToPicking', 'gapToGive', 'gapToCommission', 'operationCapturaCode'];
  dataSource = new MatTableDataSource<CashDifference>();
  pagesCashDiff: PagesCashDifference = { currentPage: 0, resultsInPage: 0, totalPages: 0, totalResults: 0, results: [] };
  ELEMENT_DATA: CashDifference[] = [];
  filterValue: string = '';
  sizePage: string = '50';

  brandSelector: Brands = {brandName:'', brandId: 0};
  branchSelector: string = '';
  routeSelector: string = '';
  disabledRegion: boolean = true;
  disabledFinalDate: boolean = true;
  initialDate: string = '';
  correctFormatInitialDate: string = '';
  finalDate: string = '';
  correctFormatFinalDate: string = '';
  respFilter: CashDifference[] = [];
  paginatorArray: number[] = [];
  initPag: number = 1;
  finPag: number = 0;

  constructor( private matDialog: MatDialog, private catalogService: CatalogsService,
               private cashDifference: CashDifferencesService ) { }

  ngOnInit(): void {
    this.fillData();
  }

  fillData() {
    this.initPag = 1 ;
    this.cashDifference.getCashDifference( String(this.initPag), this.sizePage, this.correctFormatInitialDate, this.correctFormatFinalDate ).subscribe((res) => {
      this.pagesCashDiff = res;
      this.ELEMENT_DATA = res.results;
      this.initPag = res.currentPage;
      this.finPag = res.totalPages;
      this.paginatorArray = [];
      for( let i = 1; i <= 6; i++ ) {
        if( i <= this.finPag){
          this.paginatorArray.push(i);
        }
      }
     
      this.dataSource = new MatTableDataSource<CashDifference>(this.ELEMENT_DATA);
    });

    if( this.disabledRegion ) {
      this.catalogService.getBrands().subscribe( ( {results}: any) => {
        this.brands = results;
      });
    }

    this.catalogService.getRoutes().subscribe( ( {results}: any ) => {
      this.routes = results;
    });

  }

  getGapToPicking(): number {
    return this.ELEMENT_DATA.map( elem => elem.gapToPicking ).reduce(( valAnt, valAct ) => valAnt + valAct, 0);
  }

  getGapToGive(): number {
    return this.ELEMENT_DATA.map( elem => elem.gapToGive ).reduce(( valAnt, valAct ) => valAnt + valAct, 0);
  }

  getGapToCommission(): number {
    return this.ELEMENT_DATA.map( elem => elem.gapToCommission ).reduce(( valAnt, valAct ) => valAnt + valAct, 0);
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
 
    this.ELEMENT_DATA = this.dataSource.filteredData;
  }

  selectBrand() {
    this.disabledRegion = false;

    this.catalogService.getBranches(Number(this.brandSelector.brandId)).subscribe( ( {results}: any ) => {
      this.branches = results;
    });
    this.initPag = 1;
    this.cashDifference.getCashDifference(String(this.initPag), this.sizePage, this.correctFormatInitialDate, this.correctFormatFinalDate, String(this.brandSelector.brandId), this.branchSelector, this.routeSelector ).subscribe( res => {
      this.pagesCashDiff = res;
      this.ELEMENT_DATA = res.results;
      this.initPag = res.currentPage;
      this.finPag = res.totalPages;
      this.paginatorArray = [];
      for( let i = 1; i <= 6; i++ ) {
        if( i <= this.finPag){
          this.paginatorArray.push(i);
        }
      }
     
      this.dataSource = new MatTableDataSource<CashDifference>(this.ELEMENT_DATA);
    });
  }

  selectRegion() {
    this.initPag = 1;
    this.cashDifference.getCashDifference(String(this.initPag), this.sizePage, this.correctFormatInitialDate, this.correctFormatFinalDate, String(this.brandSelector.brandId), this.branchSelector, this.routeSelector).subscribe( res => {
      this.pagesCashDiff = res;
      this.ELEMENT_DATA = res.results;
      this.initPag = res.currentPage;
      this.finPag = res.totalPages;
      this.paginatorArray = [];
      for( let i = 1; i <= 6; i++ ) {
        if( i <= this.finPag){
          this.paginatorArray.push(i);
        }
      }
     
      this.dataSource = new MatTableDataSource<CashDifference>(this.ELEMENT_DATA);
    });
  }

  selectRoute() {
    this.initPag = 1;
    this.cashDifference.getCashDifference(String(this.initPag), this.sizePage, this.correctFormatInitialDate, this.correctFormatFinalDate, String(this.brandSelector.brandId), this.branchSelector, this.routeSelector).subscribe( res => {
      this.pagesCashDiff = res;
      this.ELEMENT_DATA = res.results;
      this.initPag = res.currentPage;
      this.finPag = res.totalPages;
      this.paginatorArray = [];
      for( let i = 1; i <= 6; i++ ) {
        if( i <= this.finPag){
          this.paginatorArray.push(i);
        }
      }
     
      this.dataSource = new MatTableDataSource<CashDifference>(this.ELEMENT_DATA);
    });
  }

  changeInitialDate() {
    this.initPag = 1;
    this.disabledFinalDate = false;
    const inputFinalDate = document.querySelector('#inputFinalDate');
    inputFinalDate?.setAttribute('style', 'opacity: 1; margin-right: 5px;');
 
    let dateInput: string[] = this.initialDate.split("-");
    this.correctFormatInitialDate = `${dateInput[2]}/${dateInput[1]}/${dateInput[0]}`;
    this.correctFormatFinalDate = this.correctFormatInitialDate;
    
    this.cashDifference.getCashDifference(String(this.initPag), this.sizePage, this.correctFormatInitialDate, this.correctFormatFinalDate, String(this.brandSelector.brandId), this.branchSelector, this.routeSelector).subscribe( res => {
      this.pagesCashDiff = res;
      this.ELEMENT_DATA = res.results;
      this.initPag = res.currentPage;
      this.finPag = res.totalPages;
      this.paginatorArray = [];
      for( let i = 1; i <= 6; i++ ) {
        if( i <= this.finPag){
          this.paginatorArray.push(i);
        }
      }
      
      this.dataSource = new MatTableDataSource<CashDifference>(this.ELEMENT_DATA);
    });
  }
  
  changeFinalDate() {
    this.initPag = 1;
    let dateInputFinal: string[] = this.finalDate.split("-");
    this.correctFormatFinalDate = `${dateInputFinal[2]}/${dateInputFinal[1]}/${dateInputFinal[0]}`;
    console.log("Fecha inicial, formato correcto", this.correctFormatInitialDate, " y final ", this.correctFormatFinalDate);
   
    this.cashDifference.getCashDifference(String(this.initPag), this.sizePage, this.correctFormatInitialDate, this.correctFormatFinalDate, String(this.brandSelector.brandId), this.branchSelector, this.routeSelector).subscribe( res => {
      this.pagesCashDiff = res;
      this.ELEMENT_DATA = res.results;
      this.initPag = res.currentPage;
      this.finPag = res.totalPages;
      this.paginatorArray = [];
      for( let i = 1; i <= 6; i++ ) {
        if( i <= this.finPag){
          this.paginatorArray.push(i);
        }
      }
      
      this.dataSource = new MatTableDataSource<CashDifference>(this.ELEMENT_DATA);
    });
  }

  updatePage(pag: number) {
    this.initPag = pag;
    this.cashDifference.getCashDifference(String(pag), this.sizePage, this.correctFormatInitialDate, this.correctFormatFinalDate, String(this.brandSelector.brandId), this.branchSelector, this.routeSelector).subscribe( res => {
      this.pagesCashDiff = res;
      this.ELEMENT_DATA = res.results;
     
      this.dataSource = new MatTableDataSource<CashDifference>(this.ELEMENT_DATA);
    });
  }

  changePage(direction: string) {
    if(direction === 'right'){
      if(this.paginatorArray[this.paginatorArray.length - 1] < this.finPag){
        for(let i = 0 ; i < 6; i++){
          this.paginatorArray[i] += 1;
        }
      }  
    }
    else{
      if(this.paginatorArray[0] > 1){
        for(let i = 0 ; i < 6; i++){
          this.paginatorArray[i] -= 1;
        }
      }
    }
  }

  clearFilters() {
    this.filterValue = '';
    this.brands = [];
    this.brandSelector = {brandName: '', brandId: 0};
    this.branches = [];
    this.branchSelector = '';
    this.routes = [];
    this.routeSelector = '';
    this.disabledRegion = true;
    this.initialDate = '';
    this.correctFormatInitialDate = '';
    this.finalDate = '';
    this.correctFormatFinalDate = '';
    this.disabledFinalDate = true;
    this.initPag = 1 ;
    this.paginatorArray = [];
    const inputFinalDate = document.querySelector('#inputFinalDate');
    inputFinalDate?.setAttribute('style', 'opacity: 0.4; margin-right: 5px;');
    this.fillData();
  }

  openDialogOperationsCapture( element: CapturingOperationsPNC[] ) {
    const dialogRef = this.matDialog.open( OperationsCaptureDialogComponent, {
      height: '437px',
      width: '732px',
      data: { element: element }
    });
    
  }

}
