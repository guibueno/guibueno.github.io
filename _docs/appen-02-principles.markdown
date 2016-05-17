---
title: Appendix 2 - Principles
layout: page
section: appendices
---

The following list presents the each principle's name and current walk-through script.

{% for principle in site.principles %}
#### {{ principle.title }}

{{ principle.content }}

{% endfor %}