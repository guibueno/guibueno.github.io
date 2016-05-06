---
layout: doc
title: Doc
permalink: /index.html
---

**LanguageBug** is a graduate student's thesis project that addresses the challenge of increasing language learning efficacy through technology. It does so from an instructional design perspective, so its development and validation should depend on investigation, research, and testing.

## Work-in-progress quick access links

### Presentation

**[Presentation Outline](/outline)**  
**[Presentation Draft](/presentations/design-expo/index.html)**

### Rationale

{% for rationale in site.rationale %}
* <a href="{{ rationale.url | prepend: site.baseurl }}">{{ rationale.title }}</a>{% endfor %}

### Exercises

{% for exercise in site.exercises %}
* <a href="{{ exercise.url | prepend: site.baseurl }}">{{ exercise.title }}</a>{% endfor %}