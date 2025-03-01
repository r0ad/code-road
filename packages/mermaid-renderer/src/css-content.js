/**
 * Mermaid 图表的 CSS 样式
 */
export const cssContent = `
.mermaid {
  display: flex;
  justify-content: center;
  overflow-x: auto;
  margin: 1.5em 0;
}

.mermaid-svg {
  display: flex;
  justify-content: center;
  overflow-x: auto;
  margin: 1.5em 0;
}

.mermaid svg {
  max-width: 100%;
  height: auto;
}

.mermaid-svg svg {
  max-width: 100%;
  height: auto;
}

/* 暗黑模式样式 */
html.dark .mermaid .label {
  color: #f8f8f2;
}

html.dark .mermaid .node rect,
html.dark .mermaid .node circle,
html.dark .mermaid .node ellipse,
html.dark .mermaid .node polygon,
html.dark .mermaid .node path {
  fill: #282a36;
  stroke: #f1fa8c;
}

html.dark .mermaid .edgePath .path {
  stroke: #f8f8f2;
}

html.dark .mermaid .edgeLabel {
  background-color: #282a36;
  color: #f8f8f2;
}

html.dark .mermaid .cluster rect {
  fill: #44475a;
  stroke: #f1fa8c;
}

html.dark .mermaid .cluster text {
  fill: #f8f8f2;
}
` 