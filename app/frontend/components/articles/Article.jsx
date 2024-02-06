import { Link } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import { truncateText } from "../../helpers/helpers";
import clsx from "clsx";
import ReactMarkdown from "react-markdown";
// import rehypeRaw from "rehype-raw";
// import { Prism as SyntaxHighlighter } from '}';
// import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import MDEditor from '@uiw/react-md-editor';
import CodeMermaid from "../ui/CodeMermaid";

const sanitizeText = (text) => {
  const doc = new DOMParser().parseFromString(text, "text/html");
  const plainText = doc.body.textContent || "";
  let sanitizedText = plainText.replace(/\*\*(.*?)\*\*/g, "$1");
  sanitizedText = sanitizedText.replace(/#/g, "");
  sanitizedText = sanitizedText.replace(/>/g, "");

  return sanitizedText;
};

// const sanitizeTextDetail = (text) => {
//   const lines = text.split(/\n/);
//   const sanitizedLines = lines.map((line) => {
//     const trimmedLine = line.trim();
//     if (trimmedLine.startsWith(">")) {
//       const content = trimmedLine.slice(1).trim();
//       return `<blockquote>${content}</blockquote>`;
//     } else if (trimmedLine.match(/^```jsx/)) {
//       // Agregar lenguaje JSX al bloque de código JSX
//       const codeContent = trimmedLine.replace(/^```jsx(.*)/, "```jsx\n");
//       return (
//         <SyntaxHighlighter style={atomDark}>
//           {codeContent}
//         </SyntaxHighlighter>
//       );
//     }
//     return line;
//   });

//   return sanitizedLines.join("\n");
// };

/* <ReactMarkdown
    className={clsx({ "line-clamp-3 md:line-clamp-2": listMode })}
    components={renderers}
    rehypePlugins={[rehypeRaw]}
  >
    {content}
  </ReactMarkdown> */

// const sanitizeTextDetail2 = (text) => {
//   console.log(text)
//   const lines = text.split(/\n/);
//   const sanitizedLines = lines.map((line, index) => {
//     const trimmedLine = line.trim();
//     if (trimmedLine.match(/^```jsx/)) {
//       const codeLines = [trimmedLine.replace(/^```jsx(.*)/, "\`\`\`jsx")];
//       // Buscar líneas siguientes hasta encontrar el cierre ```
//       for (let i = index + 1; i < lines.length; i++) {
//         let nextLine = lines[i].trim();
//         codeLines.push(nextLine);

//         if (nextLine === '```') {
//           nextLine = nextLine.replace(/^```/, "\`\`\`")
//         }
//       }
//       const codeContent = codeLines.join('\n');
//       return codeContent
//     }
//     return line; // Devolver la línea original como cadena de texto
//   });

//   return sanitizedLines.join('\n'); // Unir todas las líneas en una sola cadena
// };
// const sanitizeTextDetail = (text) => {
//   console.log(text)
//   const lines = text.split(/\n/);
//   console.log(lines)
//   const sanitizedLines = lines.map((line, index) => {
//     const trimmedLine = line.trim();
//     if (trimmedLine.match(/^```jsx/)) {
//       const codeLines = [trimmedLine.replace(/^```jsx(.*)/, "$1")];
//       for (let i = index + 1; i < lines.length; i++) {
//         const nextLine = lines[i].trim();
//         codeLines.push(nextLine);

//         if (nextLine === '```') {
//           break;
//         }
//       }
//       const codeContent = codeLines.join('\n');
//       return codeContent;
//     }
//     return line;
//   });

//   return sanitizedLines.join('\n');
// };

// const CustomCodeBlock = ({ language, value }) => (
//   <SyntaxHighlighter language={language} style={atomDark}>
//     {value}
//   </SyntaxHighlighter>
// );

// const CustomBlockquote = ({ children }) => (
//   <div className="custom-blockquote" style={{ color: "gray", borderLeft: "4px solid gray", padding: "10px" }}>
//     {children}
//   </div>
// );

export const Article = ({ title, body, slug, listMode = true }) => {
  const content = listMode ? truncateText(body, 210) : body
  const sanitizedContent = listMode ? sanitizeText(content) : body.replace(/&gt;/g, ">")
  // const renderers = {
  //   blockquote: CustomBlockquote,
  //   code: CustomCodeBlock
  // }
  return (
    <div className="w-full">
      {listMode ? (
        <>
          <Link to={`/articles/${slug}`}>
            <h1 className="font-black py-2">{title}</h1>
          </Link>
          <ReactMarkdown
            className={clsx({ "line-clamp-3 md:line-clamp-2": listMode })}
            children={sanitizedContent}
            allowedElements={["a", "strong", "em", "p", "h1", "h2", "ul", "ol", "li", "blockquote"]}
          />
        </>
      ) : (
        <>
        <h1 className="font-black py-2">{title}</h1>
        <div className={clsx({ "line-clamp-3 md:line-clamp-2": listMode })}>
          <MDEditor.Markdown
            source={sanitizedContent}
            components={{
              code: CodeMermaid
            }}
          />
        </div>
        </>
      )}
    </div>
  );
};

// CustomBlockquote.propTypes = {
//   children: PropTypes.node,
// };

Article.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  slug: PropTypes.string,
};
