import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

import { OperacaoAPIServiceService } from '../service/operacao-apiservice.service';

@Component({
  selector: 'has-operacao',
  templateUrl: './operacao.component.html',
  styleUrls: ['./operacao.component.css']
})
export class OperacaoComponent implements OnInit {

  apiForm : FormGroup

  constructor(private formBuilder : FormBuilder, private service : OperacaoAPIServiceService) { }

  ngOnInit() {

    this.apiForm = this.formBuilder.group({
        num1 : this.formBuilder.control(''),
        num2 : this.formBuilder.control('')
    })
  }

  onProcessar()
  {
    let num1 : string = this.apiForm.value.num1;
    let num2 : string = this.apiForm.value.num2;

    this.service.subtrair(num1,num2)
               .subscribe(data => alert(data),
                         error => console.log(error));
  }

}
