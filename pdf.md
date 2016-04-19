---
permalink: /pdf/
---

<script type="text/javascript" src="/scripts/hideme.js"></script>

<div id='hideme'>
	
	<strong>Warning:</strong>
	This PDF print page is a huge series of work-arounds that is likely to <strong>not work well</strong>. Anyways, you should try pressing Ctrl+P and see if it works.

	<a href="javascript:hide('hideme')" class="close_notification" title="Click to Close">Click to dismiss</a>

</div>

{% for item in site.docs %}

	{{ item.output }}

{% endfor %}

<script type="text/javascript" src="/scripts/findreplaceall.js"></script>