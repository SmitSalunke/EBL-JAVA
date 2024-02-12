import { NgModule } from "@angular/core";
<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
=======
import { RouterModule, Routes } from "@angular/router";
>>>>>>> 9068d3cb007e3facb0f775f6314a5efc24ec142c

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },

  {
    path: "bank",
    loadChildren: () => import("./bank/bank.module").then((m) => m.BankModule),
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/auth",
  },
];

@NgModule({
<<<<<<< HEAD
  declarations: [
    AppComponent // Declare AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent] // Bootstrap AppComponent
})
export class AppRoutingModule {}
=======
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
>>>>>>> 9068d3cb007e3facb0f775f6314a5efc24ec142c
