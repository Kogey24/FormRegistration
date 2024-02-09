import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormComponent } from "./form/form.component";
 
@NgModule({
    declarations: [
        AppComponent,
        FormComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule,
        // MatIconModule,
        //  NgApexchartsModule,
        // PerfectScrollbarModule,
        //  MatMenuModule,
        // MatTooltipModule,
        // MatProgressBarModule,
        //  MatTableModule,
        //  MatPaginatorModule,
        // MatInputModule,
        //  MatSortModule,
        // MatSelectModule,
        // MatTabsModule,
        // MatCheckboxModule,
        //  MatTableExporterModule,
        //  MatProgressSpinnerModule,
        // MatFormFieldModule,
        // MatButtonModule,
        // MatDialogModule,
        // MatDatepickerModule,
        // ComponentsModule,
        // MatCardModule,
        ReactiveFormsModule,
        // MatSnackBarModule,
        //  MatToolbarModule,
        // SharedModule,
        //  MatStepperModule,
        // NgxMaskModule,
        //  MatChipsModule,
        CommonModule,
        FormsModule,
        FormComponent
    ]
})
export class AppModule { }
