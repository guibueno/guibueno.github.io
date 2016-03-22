---
layout: log
title: Meetings
permalink: /logs/meetings/
---
<div class="home">
    
  {% for meetings in site.meetings reversed %}
    <p>
      <a href="{{ meetings.url | prepend: site.baseurl }}">
        [{{ meetings.date | date: "%D" }}] {{ meetings.title }}
      </a><br>
      <span class="log-meta">with {{ meetings.participants }}</span>
    </p>
  {% endfor %}

</div>