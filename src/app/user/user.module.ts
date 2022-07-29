import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ProfileComponent } from "./profile.component"
import { userRoutes } from "./user.routes"
import { RouterModule } from "@angular/router"


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        ProfileComponent
    ],
    providers: [

    ]
})

export class UserModule {}