---
layout: log
title: Deadlines
permalink: /logs/deadlines/
---
<div class="home">

  {% for deadlines in site.deadlines %}
    <p>
        <a href="{{ deadlines.url | prepend: site.baseurl }}">
          [{{ deadlines.date | date: "%b %-d" }}] {{ deadlines.title }}
        </a>
    </p>
  {% endfor %}

</div>