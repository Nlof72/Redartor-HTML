const format = require('html-format');


export const getHTML = (components) => {
    let HTML = "";

    components.forEach((obj) => {
        let block = "";
        obj.filter(item => item.parentId === 0).forEach((component) => {
            const className = `${component.id.substr(0, 8)}-${component.componentType}`;

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
<body>
${HTML}
</body>
`;

    return (format(HTML, ' '.repeat(4)));
}

export const getCSS = (components) => {

    let CSS = "";

    components.forEach((obj) => {
        obj.filter(item => item.parentId === 0).forEach((component) => {

            let params = "";

            Object.keys(component.css).map((e, i) => {
                return params += `\
                ${e}: ${component.css[e]};
                `
            })

             if (params !== "")
                 CSS += `.${component.id.substr(0, 8) + "-" + component.componentType}{
                 ${params}
                 }
 `;
        })
    });

    return (format(CSS, ' '.repeat(4)));
}
