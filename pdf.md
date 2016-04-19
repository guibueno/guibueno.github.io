---
permalink: /pdf/
---
{{ include.param }}

{% for item in site.docs %}

	{{ item.output }}

{% endfor %}

<script type="text/javascript" src="/scripts/findreplaceall.js"></script>