import 'highlight.js/styles/atom-one-dark-reasonable.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

// Then register the languages you need
hljs.registerLanguage('javascript', javascript);

export default function highlightCode() {
  hljs.highlightAll()
}