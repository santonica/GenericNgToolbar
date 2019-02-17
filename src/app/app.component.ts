import {Component, ContentChild, Directive, QueryList} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {DomSanitizerImpl} from "@angular/platform-browser/src/security/dom_sanitization_service";

@Directive({selector: 'iframe'})
export class IframeDirective {
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'generic-toolbar-app';
constructor(private sanitizer: DomSanitizer) {

}

  @ContentChild(IframeDirective) iframe !: IframeDirective;

  showURL= this.sanitizer.bypassSecurityTrustResourceUrl("https://www.decisionengines.ai");

  showSelection(url) {
      this.showURL = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
