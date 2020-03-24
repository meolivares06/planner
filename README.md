## Crear el proyecto
    ng new planner

## Agregar Angular Material
    ng add @angular/material

## Extra: fuente roboto y material icons offline
    npm install material-design-icons-iconfont
    npm install roboto-npm-webfont

    // Agrega las fuentes primero y luego los iconos
    File: src/styles.css
    @import '~roboto-npm-webfont/full/style.css';

    $material-design-icons-font-directory-path: '~material-design-icons-iconfont/dist/fonts/';
    @import '~material-design-icons-iconfont/src/material-design-icons';

## A continuación seguimos la guía de instalación de la página oficial
https://storybook.js.org/docs/guides/guide-angular/

Nótese que están la forma automática y la manual. La primera en lo personal siempre me falla.
Sera por mi mala conexión :( .

### Al terminar la configuración tenedremos Storybook funcionando y una historia de un botón.





## Creación de una historia de usuario con el formato CSF
CSF (Component Story Format): es la sintaxis recomenda por Storybook a partir de la version 5.2.
La forma anterior (storiesOf) esta deprecated y se eliminará en futura versiones.

## Creamos un archivo planner.stories.js que puede estar dentro de nuestro componente (planner).
    // moduleMetada: Necesario para crear el contexto adecuado para nuestro componente.
    // Su contenido es igual que el del @NgModule
    // Pondremos allí las dependencias de nuestro componente.
    // En este caso con agregar el AppModule tenemos suficiente,
    // ya que AppModule importa a su vez MaterialModule.

    import { moduleMetadata } from "@storybook/angular";

    // Todas nuestras dependencias están aquí.
    import { AppModule } from '../app.module'

    // Nuestro componente, al que le haremos la historia
    import { PlannerFormComponent } from "./planner-form.component";
    export default {
        title: "Planner",
        decorators: [
            moduleMetadata({
              imports: [AppModule]
            })
        ]
    };

    export const Normal = () => ({
        component: PlannerFormComponent
    });

## Creamos nuestro módulo Material
    // Crea una carpeta (material)
    // Crea dentro el archivo (material.module) con el siguiente contenido:

    import { NgModule } from '@angular/core';

    import { MatFormFieldModule } from '@angular/material/form-field';
    import { MatInputModule } from '@angular/material/input';
    import { MatIconModule } from '@angular/material/icon';
    import { MatStepperModule } from '@angular/material/stepper';
    import { MatButtonModule } from '@angular/material/button';



    @NgModule({
    imports: [
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatStepperModule,
        MatButtonModule
    ],
    exports: [
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatStepperModule,
        MatButtonModule
    ]
    })
    export class MaterialModule {}

En este módulo iremos agregando todos los módulos que son dependencias de los componentes de Angular Material.

## Importa el nuevo módulo en AppModule:
    // src/app.module.ts
    import { MaterialModule } from './material/material.module';
    @NgModule({
    declarations: [
        AppComponent,
        PlannerFormComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        // Nota el import de FormsModule y ReactiveFormsModule
        // necesario para el trabajo con Forms
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }




