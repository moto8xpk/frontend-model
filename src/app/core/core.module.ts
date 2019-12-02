import { MaterialModule } from './../material/material.module';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';

export const CONPONENT = [
  LayoutComponent
]

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    MaterialModule,
    CommonModule
  ], exports: CONPONENT
})
export class CoreModule { }
