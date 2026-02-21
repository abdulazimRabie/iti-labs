import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-fields',
  imports: [ReactiveFormsModule],
  templateUrl: './fields.html',
  styles: ``,
})
export class Fields implements OnChanges{
  @Output() sendProduct = new EventEmitter<Product>();
  @Input() product_to_modify : Product | undefined = undefined;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.form);
    if (changes['product_to_modify'] && this.product_to_modify) {
      // Patch the form with the new product values
      this.form.patchValue({
        name: this.product_to_modify.name,
        description: this.product_to_modify.description,
        price: this.product_to_modify.price,
        seller: this.product_to_modify.seller,
        color: this.product_to_modify.color,
        images: this.product_to_modify.images[0]
      });
    }
  }

  inputFocused = false;

  form = new FormGroup({
    name: new FormControl(
      '',
      [Validators.required, Validators.minLength(5)]
    ),

    description: new FormControl(
      '',
      [Validators.required, Validators.minLength(10)]
    ),

    price: new FormControl(
      0,
      [Validators.required, Validators.min(0)]
    ),

    seller: new FormControl(
      '',
      [Validators.required, Validators.minLength(5)]
    ),

    color: new FormControl(
      '',
      [Validators.required, Validators.minLength(5)]
    ),

    images: new FormControl(
      'Photo1.jpg',
      [Validators.required, Validators.minLength(5)]
    )
  })

  handleSubmit(data: FormGroup) {
    console.log(data.controls);

    this.sendProduct.emit({
      name: data.controls['name'].value,
      description: data.controls['description'].value,
      price: data.controls['price'].value,
      color: data.controls['color'].value,
      seller: data.controls['seller'].value,
      images: [data.controls['name'].value],
      id: this.randomeID()

    })
  }

  private randomeID() : number{
    return Math.floor(Math.random() * 1000);
  }

}


/**
 * Reactive requires ;
 * 1- forGroup
 * 2- contains formControl
 *      - initial value
 *      - Validators
 *
 * in HTML , accessing the formgroupt then do your validation
 */
