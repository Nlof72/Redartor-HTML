import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css'
import html from 'react-syntax-highlighter/dist/esm/languages/hljs/htmlbars'
import {githubGist} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {styled} from "@mui/material/styles";
import {Box, Typography} from "@mui/material";

const CodeArea = (props) => {
    const ADDED = [1];
    const REMOVED = [2];
    console.log(props.mode)
    return (
        <CodeAreaWrapper>
            <CodeHeader>{props.mode === 1 ? "HTML" : "CSS"}</CodeHeader>
            <SyntaxHighlighter
                language={props.mode === 1 ? html : css}
                style={githubGist}
                showLineNumbers='true'
                wrapLongLines='true'
                lineProps={lineNumber => {
                    let style = {display: 'block'};
                    if (ADDED.includes(lineNumber)) {
                        style.backgroundColor = '#dbffdb';
                    } else if (REMOVED.includes(lineNumber)) {
                        style.backgroundColor = '#ffecec';
                    }
                    return {style};
                }}
            >
                {props.code}
            </SyntaxHighlighter>
        </CodeAreaWrapper>
    );
}

const CodeHeader = styled(Typography)({
    fontSize: 30,
    textAlign: "center",
    fontWeight: "700",


})

const CodeAreaWrapper = styled(Box)({
    fontSize: 24,
    overflowY: "auto",
    height: "100%",
    color: "#333333"
})

export default CodeArea;