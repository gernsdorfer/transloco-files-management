import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';

@NgModule({
  imports: [CommonModule, TranslocoModule],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'module-b' }],
  declarations: [HelloComponent],
  exports: [HelloComponent]
})
export class ModuleBModule {
}
