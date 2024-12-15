export const publicationTemplate = '' +
    '                     <div class="publication-block">' +
    '                         <div class="left">' +
    '                                   <div class="teaser">' +
    '                                       <img src="{{teaser}}" alt="Teaser of {{title}}">' +
    '                                   </div>' +
    '                         </div>' +
    '                         <div class="right">' +
    '                           <div class="top">' +
    '                               <span class="mark pub_venue text-light text-14">{{event}}</span>' +
    '                               <span class="mark pub_venue text-light text-14" style="background: {{type.color}}">{{type.text}}</span>' +
    '                               <p class="text-medium text-21">{{title}}</p>' +
    '                               <p class="text-medium text-17">{{{author}}}</p>' +
    '                               <p class="text-medium text-17 text-orange">{{subtitle}}</p>' +
    '                               <div class="abstract">' +
    '                                       <p class="text-light text-17">{{{description}}}</p>' +
    '                               </div>' +
    '                               <div class="publication-icons">' +
    '                                   {{#icons}}' +
    '                                   <div class="publication-icon">' +
    '                                       <a href="{{url}}" target=\"_blank\">' +
    '                                           <img src="{{icon}}" alt="{{icon}}">' +
    '                                       </a>' +
    '                                   </div>' +
    '                                   {{/icons}}' +
    '                                   {{#study}}' +
    '                                   <p class="text-light text-12 study-title">{{title}}</p>' +
    '                                   <div class="study-icons">' +
    '                                       <a href="{{logo1.href}}" target=\"_blank\">' +
    '                                           <img src="{{logo1.icon}}" alt="{{logo1.icon}}">' +
    '                                       </a>' +
    '                                       <a href="{{logo2.href}}" target=\"_blank\">' +
    '                                       <img src="{{logo2.icon}}" alt="{{logo2.icon}}">' +
    '                                       </a>' +
    '                                   </div>' +
    '                                   {{/study}}' +
    '                               </div>' +
    '                           </div>' +
    '                         </div>' +
    '                    </div>'
