export const educationTemplate = '<div class="education-block">' +
    '                <div class="top">' +
    '                    <p class="text-medium text-17 type ">{{{title}}}</p>' +
    '                    <p class="text-light text-17 text-orange time">{{time}}</p>' +
    '                </div>' +
    '                <div class="bottom">' +
    '                   <div class="text">' +
    '                       <p class="text-medium text-17 place">{{{place}}}</p>' +
    '                       <p class="text-light text-17">{{{thesis}}}</p>' +
    '                       <p class="text-light text-17" style="text-align: justify">{{{supervisor}}}</p>' +
    '                   </div>' +
    '                   <div class="logos">' +
    '                       {{#logo}}                       ' +
    '                           <img src="{{.}}" alt="{{.}}"/>' +
    '                       {{/logo}}                           ' +
    '                   </div>' +
    '                </div>' +
    '            </div>'
