export const experienceTemplate = '<div class="experience-block">' +
    '                <div class="top">' +
    '                    <p class="text-medium text-17 type">{{jobTitle}}</p>' +
    '                    <p class="text-orange text-light text-17 time">{{time}}</p>' +
    '                </div>' +
    '                <div class="bottom">' +
    '                   <div class="text">' +
    '                       <p class="text-medium text-17 place">{{{place}}}</p>' +
    '                       <p class="text-light text-17" style="text-align: justify">{{{description}}}</p>' +
    '                   </div>' +
    '                   <div class="logos">' +
    '                       {{#logo}}     ' +
    '                           <img src="{{.}}" alt="{{.}}"/>' +
    '                       {{/logo}}     ' +
    '                   </div>' +
    '                </div>' +
    '            </div>'
