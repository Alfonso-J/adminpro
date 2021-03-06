import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import 'rxjs/add/operator/filter'; 
import 'rxjs/add/operator/map'; 
import { NullAstVisitor } from '@angular/compiler';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  label: string = '';

  constructor(
    private router: Router,
    public title: Title,
    public meta: Meta
  ) { 
    
    this.getDataRoute()
    .subscribe(data => {
      console.log(data);
      this.label = data.titulo;
      this.title.setTitle(this.label);
      
      // tslint:disable-next-line:prefer-const
      let metaTag: MetaDefinition = { 
        name: 'Description',
        content: this.label,
      };
      this.meta.updateTag(metaTag);
      
    });
  }
    
  ngOnInit() {
  }
  // Esto se puede poner en un servicio
  getDataRoute() {
    return this.router.events
    .filter(evento => evento instanceof ActivationEnd)
    .filter((evento: ActivationEnd) => evento.snapshot.firstChild === null)
    .map((evento: ActivationEnd) => evento.snapshot.data);
  }

}
