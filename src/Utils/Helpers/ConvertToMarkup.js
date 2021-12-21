const format = require('html-format');


export const getHTML = (components) => {
    let HTML = "";

    components.forEach((obj) => {

        let block = "";
        obj.filter(item => item.parentId === 0).forEach((component) => {
            const className = `${component.componentType}-${component.id.substr(0, 8)}`;
            const objName = component.componentType;
            const objClass = Object.keys(component.css).length !== 0 ? `class="${className}"` : "";
            const objHref = component.html.href ? `href="${component.html.href}"` : "";
            const objSrc = component.html.src ? `src="${component.html.src}"` : "";
            const objText = component.html.content;

            if (["input", "img"].includes(objName))
                block += `\
<${objName} ${objClass} ${objSrc} ${objHref}/>
`;
            else
                block += `\
<${objName} ${objClass} ${objSrc} ${objHref}>
${objText}
</${objName}>
`;
        })
        HTML += `\
        <div>
${block}
</div>
`
    });
    HTML = `\

<!DOCTYPE HTML>
<html>
<head>
<link rel="stylesheet" href="style.css" type="text/css"/>
</head>
<body>
${HTML}
</body>
</html>
`;

    return (format(HTML, ' '.repeat(4)));
}

const convertToCSS = (param) => {
    switch (param) {
        case "paddingBottom":
            return "padding-bottom";
            break;
        case "borderColor":
            return "border-color";
            break;
        case "borderWidth":
            return "border-width";
            break;
        case "borderStyle":
            return "border-style";
            break;
        case "backgroundColor":
            return "background-color";
            break;
        case "backgroundImage":
            return "background-image";
            break;
        case "fontSize":
            return "font-size";
            break;
        case "fontFamily":
            return "font-family";
            break;
        case "textAlign":
            return "text-align";
            break;
        case "lineHeight":
            return "line-height";
            break;
        case "letterSpacing":
            return "letter-spacing";
            break;
        case "marginLeft":
            return "margin-left";
            break;
        case "marginTop":
            return "margin-top";
            break;
        case "marginRight":
            return "margin-right";
            break;
        case "marginBottom":
            return "margin-bottom";
            break;
        case "paddingLeft":
            return "padding-left";
            break;
        case "paddingTop":
            return "padding-top";
            break;
        case "paddingRight":
            return "padding-right";
            break;
        case "paddingBottom":
            return "padding-bottom";
            break;
        default:
            return param;
            break;


    }
}
export const getCSS = (components) => {

    let CSS = "";

    components.forEach((obj) => {
        obj.filter(item => item.parentId === 0).forEach((component) => {

            let params = "";

            Object.keys(component.css).map((e, i) => {
                if (component.css[e])
                    return params += `\
                ${convertToCSS(e)}: ${component.css[e]};
                `
            })

            if (params !== "")
                CSS += `.${component.componentType}-${component.id.substr(0, 8)}{
                 ${params}
                 }
 `;
        })
    });

    return (format(CSS, ' '.repeat(4)));
}
