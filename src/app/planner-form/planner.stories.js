import { moduleMetadata } from "@storybook/angular";
import { AppModule } from '../app.module'
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
