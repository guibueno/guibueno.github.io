---
title: List of Exercises
layout: doc
section: design
---

<!-- Why jekkyl?? -->

{% for exercise in site.exercises %}

### Exercise: {{ exercise.title }}

#### Goal
{{ exercise.goal }}

#### Description
{{ exercise.description }}

#### Why
{% for item in exercise.why %}
* {{ item }}{% endfor %}

#### Required Principles
{{ exercise.principles }}

#### Potential Pitfalls
{{ exercise.ppitfalls }}

#### Content

<!--<table border="1">
<tr class="title">
<td>Content</td>
<td>Translation</td>
</tr>
{% for item in exercise.content %}
<tr>
<td>{{ item.center }}</td>
<td>{{ item.translation }}</td>
</tr>
{% endfor %}
</table>-->

{% for item in exercise.content %}
* {{ item.center }} ({{ item.translation }}){% endfor %}

{% endfor %}