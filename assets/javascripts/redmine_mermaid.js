mermaidAPI.initialize({
  startOnLoad: false
});
$(function() {
  var sequence = 0;
  $('pre code.mermaid.syntaxhl span.CodeRay').replaceWith(function() {
    // all mermaid diagrams must be different id.
    var id = 'redmine_mermaid' + sequence++;
    var text = $(this).text();
    var diagram = mermaidAPI.render(id, text);
    return diagram;
  });
});
