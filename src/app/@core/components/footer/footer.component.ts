import { SharedElement } from './../../interfaces/shared-element.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'blog-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  /**
   * Comentario inicial.
   */
  currentYear: number = new Date().getFullYear();

  /**
   * Comentario secundario
   * beach
   */
  author = 'Anartz Mugika Ledo';

  /**
   * Hola mundo
   * 
   * Como estan?
   */

  sharedElements: SharedElement[] = [
    {
      url: 'https://twitter.com/',
      path: 'mugan86',
      icon: 'fab fa-twitter'
    },
    {
      url: 'https://github.com/',
      path: 'mugan86',
      icon: 'fab fa-github'
    },
    {
      url: 'https://www.linkedin.com/in/',
      path: 'anartz-mugika-0007a062',
      icon: 'fab fa-linkedin'
    },
    {
      url: 'https://bintray.com/',
      path: 'amugika/maven',
      icon: 'fas fa-frog'
    },
    {
      url: 'https://npmjs.com/',
      path: '~mugan86',
      icon: 'fab fa-npm'
    }
  ];
}

/**
 * @deprecated This class is deprecated
 */
class Myclass{}

/**
 * Hola saludos
 * @returns Devuelve un saludo con contenido 'Hola chicas'
 */
class Anthony{}

/**
 * @ignore
 */
class AppComponent { }

/**
 * @example
 * This is a good example
 * processTarget('yo')
 *
 * @param {string} target  The target to process see {@link Todo}
 * @returns The processed target number
 */
class Anthony2{};


//for an internal reference

{ @link Todo }
[Todo]{ @link Todo }
{@link Todo | TodoClass }

Anchors are supported: [Todo]{ @link Todo#myproperty }

//for an external link

[Google] {@link http://www.google.com}
{@link http://www.apple.com|Apple}
{ @link https://github.com GitHub}


/**
 * Shows all events on a given day. Example usage:
 *
 * @example
 * <mwl-calendar-day-view
 *             [viewDate]="viewDate"
 *             [events]="events">
 * </mwl-calendar-day-view>
 */