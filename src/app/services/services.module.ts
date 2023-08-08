import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { CWDComponent } from './custom web dev/cwd.component';
import { WebDevComponent } from './web-dev/web-dev.component';
import { GPTComponent } from './gpt/gpt.component';
import { MLComponent } from './ml/ml.component';
import { GptHeroComponent } from './gpt/gpt-hero/gpt-hero.component';
import { MlHeroComponent } from './ml/ml-hero/ml-hero.component';
import { WebDevHeroComponent } from './web-dev/web-dev-hero/web-dev-hero.component';

@NgModule({
  declarations: [
    ServicesComponent,
    CWDComponent,
    WebDevComponent,
    GPTComponent,
    MLComponent,
    GptHeroComponent,
    MlHeroComponent,
    WebDevHeroComponent,
  ],
  imports: [CommonModule],
})
export class ServicesModule {}
