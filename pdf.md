---
permalink: /pdf/
title: PDF
---

<script type="text/javascript" src="/scripts/hideme.js"></script>

<div id='hideme'>
	
	<p align="center" style="text-transform: uppercase;"><strong>This funciton is on beta and works best on Google Chrome.</strong></p>
	<p>Try pressing Ctrl+P and see if you generate a printable PDF.</p>
	<p>Also, the output still needs a few tweaks, such as:</p>
	<ul>
		<li>Page-breaks rules</li>
		<li>Image Fonts</li>
		<li>Sections</li>
		<li>Table of Contents</li>
		<li>Page numbers</li>
		<li>Image Numbers</li>
		<li><del>Cover</del></li>
		<li><del>Eliminate extra margin-left</del></li>
		<li><del>Add Landscape Audit analyses</del></li>
	</ul>

	<p align="center" style="text-transform: uppercase;"><a href="javascript:hide('hideme')" class="close_notification" title="Click to Close">Click to dismiss</a></p>

</div>

![Cover]({{site.baseurl}}/images/doc-cover.png)
{: class="storyboard"}

{% for item in site.docs %}

	{% if item.section == "pre" %}

		{{ item.output }}

	{% endif %}

{% endfor %}

![Needs]({{site.baseurl}}/images/sections/needs.png)
{: class="storyboard"}

{% for item in site.docs %}

	{% if item.section == "intro" %}

		{{ item.output }}

	{% endif %}

{% endfor %}

![Analysis]({{site.baseurl}}/images/sections/analysis.png)
{: class="storyboard"}

{% for item in site.docs %}

	{% if item.section == "needs" %}

		{{ item.output }}

		{% if item.title == "Landscape Audit" %}

			{% for landscapeaudit in site.landscapeaudit %}
						   
				{{ landscapeaudit.output }}

			{% endfor %}

				![Rationale]({{site.baseurl}}/images/sections/rationale.png)
				{: class="storyboard"}

		{% endif %}

	{% endif %}

{% endfor %}

![Rationale]({{site.baseurl}}/images/sections/rationale.png)
{: class="storyboard"}

![How it works - reflect]({{site.baseurl}}/images/how-it-works/reflect.png)
{: class="storyboard"}

![How it works - speak]({{site.baseurl}}/images/how-it-works/speak.png)
{: class="storyboard"}

![How it works - record]({{site.baseurl}}/images/how-it-works/record.png)
{: class="storyboard"}

![How it works - hi-fi]({{site.baseurl}}/images/how-it-works/hi-fi.png)
{: class="storyboard"}

{% for item in site.rationale %}

	{{ item.output }}

{% endfor %}

![Features]({{site.baseurl}}/images/sections/features.png)
{: class="storyboard"}

{% for item in site.features %}

	{{ item.output }}

{% endfor %}

![FAQ]({{site.baseurl}}/images/sections/faq.png)
{: class="storyboard"}

{% for item in site.faq %}

	{{ item.output }}

{% endfor %}

![Evaluation]({{site.baseurl}}/images/sections/evaluation.png)
{: class="storyboard"}

{% for item in site.docs %}

	{% if item.section == "eval" %}

		{{ item.output }}

	{% endif %}

{% endfor %}

![Conclusion]({{site.baseurl}}/images/sections/conclusion.png)
{: class="storyboard"}

{% for item in site.docs %}

	{% if item.section == "conc" %}

		{{ item.output }}

	{% endif %}

{% endfor %}

![Future Directions]({{site.baseurl}}/images/sections/future-directions.png)
{: class="storyboard"}

{% for item in site.docs %}

	{% if item.section == "fut" %}

		{{ item.output }}

	{% endif %}

{% endfor %}

![Appendices]({{site.baseurl}}/images/sections/appendices.png)
{: class="storyboard"}

{% for item in site.docs %}

	{% if item.section == "appendices" %}

		{{ item.output }}

	{% endif %}

{% endfor %}

<script type="text/javascript" src="/scripts/findreplaceall.js"></script>