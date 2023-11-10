import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'hostedremotes-test-remote-entry',
  template: `<hostedremotes-nx-welcome></hostedremotes-nx-welcome>`,
})
export class RemoteEntryComponent {}
