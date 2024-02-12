import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
<<<<<<< HEAD

const routes: Routes = [];
=======
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./components/login/login.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { UserComponent } from "./components/user/user.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "users", component: UserListComponent },
  { path: "add-user", component: UserComponent },
];
>>>>>>> 9068d3cb007e3facb0f775f6314a5efc24ec142c

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
