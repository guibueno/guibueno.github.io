---
title: Exercises
layout: doc
section: design
---

### In a nutshell

**Exercises** are focused practices that prompt learners to produce communicative utterances in their target languages.

### Within the narrative

### Association with existing material

Information on music vs. playing the instrument
Information on gym vs. lifting weight

### Functions

* Build basic and personal vocabulary
* Speak in the target language
* Build sentences
* Language competencies
* Learn grammar implicitly

### Example: **Self-introduction**

#### What is it?

Walks learner through many self-introduction sentences, which are the most importante sentences anyone can learn.

#### Why?

Most important sentences to learn for survival.
Basic conversation skills.
Lots of important vocabulary.
Sentence structures.

#### Script

* Speak one sentence with blank
* Translate that sentence.
* Ask user to repeat sentence with addition.
* Speak another sentence

#### Screen-shots

![image1](dasd.jpg)
![image2](dasd.jpg)
![image3](dasd.jpg)
![image4](dasd.jpg)

### Scalability

For this project, only basic/novice level.

Better words, more words, better expressions.

For future versions, more exercises.

### Current exercises

{% for exercise in site.exercises %}
* [{{ exercise.title }}]({{ exercise.url | prepend: site.baseurl }}){:target="blank"}{% endfor %}

### Theoretical foundation

* Scaffolding/ZPD
* Embodied Cognition
* Adaptation

### Full list of Exercises

{% for exercise in site.exercises %}

### {{ exercise.title }}

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

<table border="1">
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
</table>


* * *

{% endfor %}