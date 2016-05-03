---
permalink: /pdf-section/
---

{% for item in site.docs %}

	{% if item.section == "eval" %}

		{{ item.output }}

		{% if item.title == "Landscape Audit" %}

			{% for landscapeaudit in site.landscapeaudit %}
						   
				{{ landscapeaudit.output }}

			{% endfor %}

		{% endif %}

	{% endif %}

{% endfor %}

<script type="text/javascript" src="/scripts/findreplaceall.js"></script>