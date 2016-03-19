---
layout: page
title: Logs
permalink: /logs/
---
<div class="home">

  <h1 class="page-heading">Meetings</h1>

  <ul class="log-list">
    {% for meetings in site.meetings reversed %}
      <li>
        <h2 class="log-link">
          <a class="log-link" href="{{ meetings.url | prepend: site.baseurl }}">[{{ meetings.date | date: "%b %-d, %Y" }}] {{ meetings.title }}</a>
        </h2>
        <span class="log-meta">with {{ meetings.participants }}</span>
      </li>
    {% endfor %}
  </ul>

</div>