---
permalink: /pdf/
---

<script type="text/javascript" src="/scripts/hideme.js"></script>

<div id='hideme'>
	
	<p align="center" style="text-transform: uppercase;"><strong>This funciton is on beta and works best on Google Chrome.</strong></p>
	<p>Try pressing Ctrl+P and see if you generate a printable PDF.</p>
	<p>Also, the output still needs a few tweaks, such as:</p>
	<ul>
		<li>Add cover page</li>
		<li>New rules for page-breaks</li>
		<li>Improve image readability</li>
		<li>Reduce final file size</li>
		<li>Split into sections</li>
		<li>Add Index with Table of Contents</li>
		<li>Add Page numbers on heade and footer</li>
		<li><del>Eliminate extra margin-left</del></li>
		<li><del>Add Landscape Audit analyses</del></li>
	</ul>

	<p align="center" style="text-transform: uppercase;"><a href="javascript:hide('hideme')" class="close_notification" title="Click to Close">Click to dismiss</a></p>

</div>

{% for item in site.docs %}

	{{ item.output }}

	{% if item.title == "Landscape Audit" %}

		{% for landscapeaudit in site.landscapeaudit %}
					   
			{{ landscapeaudit.output }}

		{% endfor %}

	{% endif %}

{% endfor %}

<script type="text/javascript" src="/scripts/findreplaceall.js"></script>