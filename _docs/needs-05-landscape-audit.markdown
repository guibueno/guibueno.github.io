---
layout: doc
title: Landscape Audit
section: needs
incomplete: no
problem: "it is a little limited"
workon:
  - "Add brief description of other categories of products"
  - "ADD THE LANDSCAPE AUDIT TABLE"
  - "IMAGE CLASS ROSETTA & 1 ICON IMAGES"
---

As described in the first section, the landscape of language learning tools is vast and diverse. This section analyzes only a few **language learning mobile applications**, since **LanguageBug** belongs to this category.
{: class="intro"}

This is also a broad category that includes a large group of services. They were chosen based on relevance and popularity, according to the number of downloads on Apple Store.

### Disclaimer

These services are long, complex, and may include paid features that I was not able to access. Therefore, these are not exhaustive analyses of their functions, but personal takes on the features I have explored.

### Product Analyses

{% for landscapeaudit in site.landscapeaudit %}
   
#### <a href="{{ landscapeaudit.url | prepend: site.baseurl }}">{{ landscapeaudit.title }}</a>
<em>"{{ landscapeaudit.about }}"</em>

{% endfor %}