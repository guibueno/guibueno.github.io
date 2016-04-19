---
permalink: /pdf/
---

<script type="text/javascript" src="/scripts/hideme.js"></script>

<div id='hideme'>
	
	<p align="center" style="text-transform: uppercase;"><strong>This funciton is on beta</strong></p>
	<p>Try pressing Ctrl+P and see if you generate a printable PDF.</p>
	<p>Also, the output still needs a few tweaks, such as:</p>
	<ul>
		<li>Add cover page</li>
		<li>New rules for page-breaks</li>
		<li>Fix for image readability</li>
		<li>Reduce final file size</li>
		<li>Split into sections</li>
		<li>Add Index with Table of Contents</li>
		<li>Add Page numbers on heade and footer</li>
		<li>Eliminate extra margin-left</li>
	</ul>

	<p align="center" style="text-transform: uppercase;"><a href="javascript:hide('hideme')" class="close_notification" title="Click to Close">Click to dismiss</a></p>

</div>

{% for item in site.docs %}

	{{ item.output }}

{% endfor %}

<script type="text/javascript" src="/scripts/findreplaceall.js"></script>