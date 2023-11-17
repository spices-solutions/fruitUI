// import type * as shiki from "shiki";
// import { renderToHtml, getHighlighter } from "shiki";

export async function highlighter() {
  return 100
}

// export interface Props {
//   code: string;
//   lang?: shiki.Lang | shiki.ILanguageRegistration;
//   theme?: shiki.IThemeRegistration;
// }


// // 1. Get the shiki syntax highlighter
// const highlighter = async () => {
//   await getHighlighter({
//     theme,
//     // Load custom lang if passed an object, otherwise load the default
//     langs: typeof lang !== "string" ? [lang] : undefined,
//   });
// };

// // 2. Turn code into shiki theme tokens
// const tokens = highlighter.codeToThemedTokens(
//   code,
//   typeof lang === "string" ? lang : lang.id,
// );

// // 3. Get shiki theme object
// const _theme = highlighter.getTheme();

// // 4. Render the theme tokens as html
// const codeOutput = renderToHtml(tokens, {
//   themeName: _theme.name,
//   fg: _theme.fg,
//   bg: _theme.bg,
//   elements: {
//     pre({ style, children }) {
//       // Swap to `code` tag if inline
//       const tag = inline ? "code" : "pre";
//       // Replace "shiki" class naming with "astro-code"
//       // Handle code wrapping
//       // if wrap=null, do nothing.
//       if (wrap === false) {
//         style += "; overflow-x: auto;";
//       } else if (wrap === true) {
//         style +=
//           "; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;";
//       }
//       return `<${tag} style="${style}" tabindex="0">${children}</${tag}>`;
//     },
//     code({ children }) {
//       return inline ? children : children;
//     },
//   },
// });
