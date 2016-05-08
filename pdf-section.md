---
permalink: /pdf-section/
---

<!-- Evaluation BEGIN --><!--
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
--><!-- Evaluation END -->


<!-- Design BEGIN -->

{% for item in site.docs %}

	{% if item.section == "design" %}

		{{ item.output }}

	{% endif %}

{% endfor %}

{% for rationale in site.rationale %}

	{{ rationale.output }}

{% endfor %}

{% for item in site.docs %}

	{% if item.section == "appendices" %}

		{{ item.output }}

	{% endif %}

{% endfor %}

<!-- Design END -->

<script type="text/javascript" src="/scripts/findreplaceall.js"></script>