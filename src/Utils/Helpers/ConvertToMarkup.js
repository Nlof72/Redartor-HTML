const format = require('html-format');

export const getHTML = (components) => {
    // Все это говно нужно переписать - это быстро костыль 2000
    let HTML = "";

    console.log(components);

    components.forEach((elem) => {
        let block = "";
        elem.filter(item => item.parentId === 0).forEach((component) => {
            let componentName = component.componentType;
            let componentClass = "";
            let componentHref = "";
            let componentSrc = "";
            let componentText = component.body;


            if (Object.keys(component.css).length !== 0) {
                componentClass = `class="${component.id.substr(0, 8)}-${component.componentType}"`;
            }

            if (component.html) {
                componentHref = "href=" + component.html.href;
                componentSrc = "src=" + component.html.src;
            }

            if (["input", "img"].includes(componentName))
                block += `\
<${componentName} ${componentClass} ${componentSrc} ${componentHref}/>
`;
            else
                block += `\
<${componentName} ${componentClass} ${componentSrc} ${componentHref}>
${componentText}
</${componentName}>
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
    // А это быстро намазанное 3000
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
