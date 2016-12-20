$(document).ready(function() {
  $('.code').append(function() {
    var code = this.innerHTML;
    var language = this.getAttribute('data-lang');

    this.innerText = "";
    return '<pre class="language-' + language + '"><code>' + code + '</code></pre>';
  });

  Prism.highlightAll();

  $('#markup-switch').click(function() {
    $('h1, h2, h3, h4, h5, h6, b, i, div.code, code, a:not(.no-markup)').toggleClass('markup');
  });
});