export const projectTemplate = '' +
    '                     <div class="project-block" data-id="{{id}}">' +
    '                         <div class="text-medium text-23">{{title}}</div>' +
    '                         <div class="teaser">' +
    '                               <img src="{{teaser}}" alt="Teaser of {{title}}">' +
    '                         </div>' +
    '                         <div class="text-medium text-17 title">Introduction</div>' +
    '                         <div class="text-light text-17">{{{introduction}}}</div>' +
    '                         <div class="text-medium text-17 title">Across-ref</div>' +
    '                         {{#content}}' +
    '                         <div>' +
    '                         <p class="text-light text-17">{{description}}</p>' +
    '                         <div>{{{content}}}</div>' +
    '                         </div>' +
    '                         {{/content}}' +
    '                         <div class="text-light text-17 sub-title">{{paperList}}</div>' +
    '                         <div class="text-medium text-17 title">Collaboration</div>' +
    '                         <div class="text-light text-17 sub-title">{{collaboration}}</div>' +
    '                    </div>'
