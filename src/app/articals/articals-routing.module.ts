import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticalsComponent } from './articals.component';
import { laptop } from './articals.component';
import { git } from './articals.component';
import { linux_commands } from './articals.component';
import { paramikofilecopy } from './articals.component';

const routes: Routes = [
	{ path: 'articals', component: ArticalsComponent,
		children: [
			{path: 'laptop', component: laptop},
			{path: 'git', component: git},
			{path: 'linux_commands', component: linux_commands},
			{path: 'paramikofilecopy', component: paramikofilecopy }
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticalsRoutingModule { }
