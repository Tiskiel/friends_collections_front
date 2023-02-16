import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../../models/item.model';
import { Type } from '../../models/type.model';
import { CollectionService } from '../../services/collection.service';
import { NavigationService } from '../../services/navigation.service';
import { UtilitiesService } from '../../services/utilities.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss'],
})
export class CreateItemComponent implements OnInit {
  dataNewItemForm!: FormGroup;
  newItemData!: Item;
  arrayCountry: string[] = this._utilities.arrayCountry;
  typeList!: Type[];
  constructor(
    private _formBuilder: FormBuilder,
    private _utilities: UtilitiesService,
    private _activatedRoute: ActivatedRoute,
    private _collectionService: CollectionService,
    private _router: Router,
    private _navigation: NavigationService
  ) {
    this.dataNewItemForm = this._formBuilder.group({
      name: ['', Validators.required],
      states: ['', Validators.required],
      version: ['', Validators.required],
      language: ['', Validators.required],
      origin: [''],
      year: [''],
      rarity: ['', Validators.required],
      //picture: [''],
      description: [''],
      collectionTypeId: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.typeList = this._activatedRoute.snapshot.data['collectionTypesList'].result.type;
  }

  naviGateToSearch() {
    this._navigation.currentItemComponentEmitter('search');
  }

  submitNewItem(): void {
    this.newItemData = this.dataNewItemForm.value;
    //Tant que la feature image est pas implémentée
    this.newItemData.picture = null;
    if (this.newItemData.year === "") {
      this.newItemData.year = null;
    }
    console.log(this.newItemData);

    this._collectionService.createItem(this.newItemData).subscribe((data) => {
      console.log(data);

    });

    this._router.navigate(['collection']);
  }

}
