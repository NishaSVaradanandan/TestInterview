import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WritingComponent } from './writing/writing.component';
import { EssayTopicsComponent } from './essay-topics/essay-topics.component';
import { WriteEssayComponent } from './write-essay/write-essay.component';

const routes: Routes = [
  { path: 'writing', component: WritingComponent},
  { path: 'EssayTopics', component: EssayTopicsComponent},
  { path: 'WriteEssay', component: WriteEssayComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WritingComponent,
    EssayTopicsComponent,
    WriteEssayComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
