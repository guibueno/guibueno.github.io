---
layout: log
title: Weeks
permalink: /logs/weeks/
---
<div class="home">

  {% for week in site.weeks reversed %}
    <p>
        <a href="{{ week.url | prepend: site.baseurl }}">
          {{ week.title }}
          (started {{ week.date | date: "%B %-d" }})
        </a>
    </p>
  {% endfor %}

</div>