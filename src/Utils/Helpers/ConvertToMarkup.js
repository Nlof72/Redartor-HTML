const format = require('html-format');

export const getHTML = (components) => {

    let HTML = "";

    components.forEach((elem) => {
        elem.filter(item => item.parentId === 0).forEach((component) => {
            let componentName = component.componentType;
            let componentClass = "";
            let componentHref = "";
            let componentSrc = "";

            if (Object.keys(component.css).length !== 0) {
                componentClass = "class=" + component.id + "-" + component.componentType;
            }
            if (component.html) {
                let componentHref = "href=" + component.html.href;
                let componentSrc = "src=" + component.html.src;
            }
            let componentText = component.body;

            if (["input", "img"].includes(componentName))
                HTML += `\
<${componentName} ${componentClass} ${componentSrc} ${componentHref}/>
`;
            else
                HTML += `\
<${componentName} class="${componentClass}" ${componentSrc} ${componentHref}>
${componentText}
</${componentName}>
`;


        })
    });
    HTML = `\
<body>
${HTML}
</body>`;

    return (format(HTML, ' '.repeat(4)));
}

export const getCSS = (components) => {
    let CSS = "";

    components.forEach((elem) => {
        elem.filter(item => item.parentId === 0).forEach((component) => {
            let componentClass = component.id + "-" + component.componentType;
            let componentCSS = component.css;
            let keys = Object.keys(componentCSS);

            let params = ""
            keys.map((e, i) => {
                params += `\
                ${e}: ${componentCSS[e]};
                `
            })
            if (params !== "")
                CSS += `.${componentClass}{
                ${params}
                }
`;
        })
    });

    return (format(CSS, ' '.repeat(4)));
}
