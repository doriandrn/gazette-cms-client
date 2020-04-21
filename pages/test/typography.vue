<template lang="pug">
article.article
  h1 Expression: There's Always Delicacy & Joy Beyond Mesmerizing Expression
  .content
    p.teaser Nullam tempus, felis quis tempus mattis, nulla turpis faucibus felis, vitae pharetra mi arcu nec tellus. Nunc nec quam non sem vehicula maximus molestie sit amet odio.
    p #[span.dropcap N]ullam consequat, enim at dictum placerat, elit libero vehicula ligula, sed fringilla tellus metus non arcu. <em>Nam eget risus fermentum.</em>
    a(href="img/winter-image.jpg")
      img(src="img/blonde-hair-image.jpg" class="align-left")
    p In tristique tellus ante, eu consectetur odio rutrum ut. Cras rutrum quam lorem, id dignissim lorem egestas at. Sed euismod urna sit amet suscipit fermentum. Nunc in arcu vitae magna cursus eleifend convallis eu dui. Duis porta eros at arcu mollis posuere. Integer fermentum ipsum quis semper finibus. Etiam vehicula ante quis mauris pretium ultricies. Vivamus finibus rhoncus odio non placerat. Aenean vel quam vestibulum, consequat dolor ut, venenatis arcu.
    p #[span.highlight Morbi Dictum at Sem Nec Ultricies.] Aenean finibus nec sapien a semper. Mauris nulla enim, maximus quis diam quis, ultrices blandit leo. In sagittis ipsum sit amet nulla luctus mollis.
    div.divider
    h2 Nulla Imperdiet Tellus Molestie Magna Efficitur Malesuada.
    p Aliquam vel justo sit amet neque posuere posuere. Cras gravida eu risus vel gravida. Aliquam pretium tempor neque, a accumsan orci consequat at. Donec bibendum urna vitae interdum mollis. Etiam leo neque, tempor vel viverra vitae, convallis et augue.
    blockquote It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.
    cite Leonardo di Ser Piero da Vinci
    img(src="img/mountains-image.jpg" class="align-right")
    p Nam massa turpis, viverra vitae lectus vitae, iaculis sagittis quam. Vivamus arcu orci, maximus sed lacus vitae, luctus molestie elit. Maecenas et libero id enim tincidunt dictum. Morbi a orci tortor. Vivamus vulputate risus nec dui luctus convallis. Sed vulputate libero nunc, sit amet sodales nisl interdum non. Sed quis lacinia urna. Morbi purus nisl, lobortis sit amet dui id, auctor rhoncus eros. Sed et mi venenatis, egestas quam vitae, fringilla arcu. Sed tincidunt quis dolor quis aliquet. Praesent posuere nunc vel quam molestie tempor. Vestibulum mollis tempor augue.
    h3 Aliquam Vel Nibh Orci. Vestibulum Pharetra, Nunc Ultricies Sagittis Tempus, Ex Purus Semper Ipsum.
    p #[span.highlight Nam a dolor egestas.] Ultrices diam vitae, tempus ante. Quisque dolor nisl, aliquam non nisl at, facilisis eleifend sem. Donec ultricies sem vitae nulla euismod, ac malesuada sem suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas eu mi tincidunt, pretium orci iaculis, facilisis enim.
    div.divider
    h4 Aenean Porta Nunc at Urna Aliquam Posuere. Vestibulum Ante Ipsum Primis in Faucibus.
    p Integer laoreet euismod facilisis. Etiam gravida varius nisl, vulputate ultrices est sollicitudin sit amet. Integer id posuere risus. Phasellus rhoncus blandit neque vitae pellentesque. Sed feugiat vel nisi pharetra hendrerit.
    img(src="img/palmtreebeach-image.jpg" class="full-width")
    p Duis lobortis eu elit quis lacinia. Morbi nec pharetra enim. Fusce in gravida eros, in lobortis justo. In hac habitasse platea dictumst. Donec eleifend accumsan elit, et viverra magna venenatis et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent laoreet ultricies ex, tincidunt fringilla diam vulputate sit amet.
    img(src="img/city-image.jpg" class="align-center")
    p Pellentesque eleifend auctor dui vitae ornare. Cras consectetur tincidunt ex, in egestas nulla mollis laoreet. Nunc blandit, dolor in lacinia luctus, ante sapien porttitor ligula, id hendrerit purus magna nec diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis massa non libero maximus, eu venenatis est ultrices.
    p Cras suscipit quam in pharetra iaculis. Quisque at arcu et ante blandit blandit. Vivamus pellentesque massa dui, nec tincidunt sapien posuere non.
    pre
      |pre {
      |	font-family: $font-family-monospace;
      |	@include font-size( 12px );
      |	line-height: 20px;
      |	color: rgba(black, .8);
      |	display: block;
      |	border: 1px solid rgba(black, .1);
      |	padding: 20px 40px;
      |}
    h3 Here's an Unordered List:
    ul
      li Suspendisse Pulvinar
      li Consequat Eget Dolor
      li Duis Lobortis
    h3 Here's an Ordered List:
    ol
      li Etiam Vehicula Porta Ligula
      li Pellentesque Eget
      li Consectetur Justo
    p Duis lobortis eu elit quis lacinia. Morbi nec pharetra enim. Fusce in gravida eros, in lobortis justo. In hac habitasse platea dictumst. Donec eleifend accumsan.
    table
      thead
        th
          td <strong>Elementum</strong>
          td <strong>Scelerisque</strong>
          td <strong>Pellentesque</strong>
      tbody
        tr
          td <strong>Sollicitudin</strong>
          td Scelerisque
          td Imperdiet
          td Lacinia
        tr
          td <strong>Lobortis</strong>
          td Suspendisse
          td Tincidunt
          td Fermentum
      tfoot
        tr
          td <strong>Consequat</strong>
          td Quisque
          td Dignissim
          td Consequat
    p Pellentesque eleifend auctor dui vitae ornare. Cras consectetur tincidunt ex, in egestas nulla mollis laoreet. Nunc blandit, dolor in lacinia luctus, ante sapien porttitor ligula, id hendrerit purus magna nec diam.
    h3 Here's a Left Pullquote.
    pullquote.align-left Sed tincidunt quis dolor quis aliquet. Praesent posuere nunc vel quam molestie tempor. Vestibulum mollis tempor augue, sed congue nulla vulputate at.
    p Fusce ultrices augue erat, sit amet facilisis elit ornare vitae. Integer erat orci, scelerisque ut efficitur non, laoreet eu lacus. Pellentesque imperdiet nulla eu dignissim tristique. Nulla libero velit, aliquet eu eleifend posuere, auctor sit amet eros. Integer iaculis sem risus, quis venenatis mi porttitor nec. Suspendisse sit amet feugiat lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla volutpat mi ipsum, id elementum nulla scelerisque in. Sed mattis nisi eros, ut maximus nunc tempus a. Maecenas ut erat enim. Nulla volutpat bibendum est a condimentum. Nam finibus risus erat, tempor tempor metus imperdiet nec.
    h3 Here's Another Pullquote, a Right One.
    pullquote.align-right Duis eu nulla congue, tempor sapien at, pulvinar quam. Nam massa turpis, viverra vitae lectus vitae, iaculis sagittis quam. Vivamus arcu orci, maximus sed lacus vitae, luctus molestie elit.
    p Fusce ultrices augue erat, sit amet facilisis elit ornare vitae. Integer erat orci, scelerisque ut efficitur non, laoreet eu lacus. Pellentesque imperdiet nulla eu dignissim tristique. Nulla libero velit, aliquet eu eleifend posuere, auctor sit amet eros. Integer iaculis sem risus, quis venenatis mi porttitor nec. Suspendisse sit amet feugiat lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla volutpat mi ipsum, id elementum nulla scelerisque in.
    div.divider
    h5 Maecenas et libero id enim tincidunt dictum. Morbi a orci tortor. Vivamus vulputate risus nec dui luctus convallis.
    p Nulla dignissim pretium sem in sodales. Nunc egestas eget enim eu sagittis. Nam et facilisis urna, sed mattis odio. Pellentesque semper non eros sit amet vehicula. Suspendisse potenti. Cras id quam ex. Ut cursus tristique est ac luctus.
    h6 Aliquam pretium tempor neque, a accumsan orci consequat at. Donec bibendum urna vitae interdum mollis.
    p Nunc id turpis pulvinar, sagittis felis at, vestibulum odio. Nulla imperdiet tellus molestie magna efficitur malesuada. Etiam velit mauris, dapibus in erat et, imperdiet vulputate velit. Ut non purus sapien. Mauris velit sem, vestibulum id congue id, tincidunt a purus. Nulla eu ultrices tortor. Nullam vitae nibh id ex rutrum venenatis sed eu massa. Donec aliquet ullamcorper cursus. Cras sodales commodo augue. Duis at augue tellus. Ut id interdum sem.
    div.divider
</template>

<style lang="stylus" scoped>
article
  max-width 640px
  margin 0 auto
  grid-area main

  h1
    +desktop()
      margin-left -25%
      max-width 800px
</style>
