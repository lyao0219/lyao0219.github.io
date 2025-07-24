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
'                                   {{#award}}' +
    '                               <span class="mark pub_venue text-light text-14" style="background: {{award.color}}">{{award.text}}</span>' +
'                                   {{/award}}' +
    '                               <p class="text-medium text-17 title">{{title}}</p>' +
    '                               <p class="text-medium text-17">{{{author}}}</p>' +
    '                               <p class="text-medium text-17 text-orange">{{subtitle}}</p>' +
    '                               <div class="publication-icons">' +
    '                                   {{#icons}}' +
    '                                   <div class="publication-icon">' +
    '                                       <a href="{{url}}" target=\"_blank\">' +
    '                                           <img src="{{icon}}" alt="{{icon}}">' +
    '                                       </a>' +
    '                                   </div>' +
    '                                   {{/icons}}' +
    '                                   {{#popups}}' +
    '                                   <div class="popup-icon" data-popup-id="{{contentId}}">' +
    '                                       <img src="{{icon}}" alt="{{icon}}">' +
    '                                   </div>' +
    '                                   {{/popups}}' +
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
