import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FromScopedLibRoutingModule } from './from-scoped-lib-routing.module';
import { FromScopedLibComponent } from './from-scoped-lib.component';
import { ModuleBModule } from '@transloco-files-management/module-b';
import { LazyTranslationsModule } from '@transloco-files-management/scoped-library';

@NgModule({
  declarations: [FromScopedLibComponent],
  imports: [
    CommonModule,
    FromScopedLibRoutingModule,
    LazyTranslationsModule,
    ModuleBModule
  ]
})
export class FromScopedLibModule {
}
