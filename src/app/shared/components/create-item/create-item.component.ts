import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../models/item.model';
import { Type } from '../../models/type.model';
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
    private _activatedRoute: ActivatedRoute
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

  submitNewItem(): void {
    this.newItemData = this.dataNewItemForm.value;
  }

}
