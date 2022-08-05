import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ProfileComponent } from "./profile.component"
import { userRoutes } from "./user.routes"
import { RouterModule } from "@angular/router"
import { LoginComponent } from "./login.component"
import { FormsModule } from "@angular/forms"


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: [

    ]
})

export class UserModule {}