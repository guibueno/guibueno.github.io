---
layout: post
title:  "Blog#7 New Thesis Website"
date:   2016-03-19 22:36:42 -0800
categories: blog
---
**Prompt:** What’s an unexpected skill you’ve developed during your thesis process? How do you think this skill will be useful (for your thesis, for your career, etc.)?

Brazil is going through [a major political process](https://www.google.com/search?client=ubuntu&channel=fs&q=google+news&ie=utf-8&oe=utf-8#channel=fs&tbm=nws&q=brazil+protests), which might result in severe damages to our democracy. As I write this post, I honestly find it hard to feel completely focused. My mind is elsewhere... in the street protests, in the heated Facebook discussions, in the non-stoping flow of news coming from there. This whole week has been like that.

[![Protest in NYC for Brazilian Democracy. March 18th, 2016](/images/post-blog7-vimeo.jpg)](https://vimeo.com/159655742 "Protest in NYC for Brazilian Democracy. March 18th, 2016")
_Our little manifestation at Union Square, last Friday._
{: style="text-align: center"}

In the midst of such a political turmoil, I've had *a lot of fun* working on my thesis. In fact, I've worked for several hours and built this entire website pretty much from scratch This is _waaaaay_ more productivity than I could ever expect from myself at this moment.

> "But, Gui... Why would you devote time into rebuilding your thesis website at this point of the semester? ... Did you really need to do that?"

**Well, you're probably right:** I'm not the best at setting (or following) my own priorities. But, on the other hand, I feel like I've addressed some *huge* issues in my thesis process, so that things are going to be much better from now on. Let me explain these claims a little better.

## Breaking up with Google Docs

Let's think for a second about the features of a [design document](/index.html/):

* It's a pretty long document.
* It's divided in different, well-structured, almost independent sections.
* I'm the only one writing on it.

Even though I think Google Docs is the best text editor ever built, it's just not the right platform in this case. In summary, neither Google Docs supported my specific needs, nor was I making use of its main features:

* It was running super slow (longer documents > processing memory).
* I needed to open the whole thing to work on a single section.
* I wasn't making any use of the collaboration features.

Those reasons somehow became huge obstacles to working on my design doc, no matter how many times that was exacly one of my priority goals for the week.

## Breaking up with Drupal

At the same time, I couldn't be more frustrated with my [guibueno.me](http://guibueno.me/thesis) Thesis website. [Drupal](http://drupal.org), the CMS I chose to use, is highly customizable, but also very hard to manage. My initial plan was to have a website for everything:

* Portfolio
* Thesis project website
* Course assignments
* Personal blog
* ...

But, after a little more than one year, all I had was a pale-looking website that ran **unbearably slow** and that forced me to waste a few hours every month with core updates.

![Screen-shot of my old thesis site](/images/post7-guibuenome.jpg)
_Screen-shot of my old thesis site_
{: style="text-align: center"}

Plus, it took me forever to update things that needed to be constantly updated, such as my project schedule, my blog posts, my deadlines, and my meeting logs. I was literally spending more time on reporting the things I did for my thesis than on actually doing those things.

## How I met Jekyll

After identifying both problems, I had to address them. My goal was to find a better platform to make three processes easier:

1. Work on independent sections of my design document.
2. Keep track of my goals, tasks, and deadlines.
3. Organize and display project information and logs.

I thought [LaTeX](https://www.latex-project.org/) was the answer, and so I spent some time learning it. 

However, it seemed too technical and complex, plus there weren't neither any LaTeX-specific courses on Lynda, nor any outsanding introductory book/website to guide me. Besides, (3) wouldn't be addressed.

Then, I thought about using [Git](https://git-scm.com/), a version control system I had only begun to learn. The idea was to work on my documents locally and update them to the clouds with just one very simple terminal command. 

One of my committee members, [Lud](/people/lud.html), used a service called [GitHub pages](https://pages.github.com/), which  could be what I was looking for. By navigating through their page, I saw a name I had never seen before:

![Have your heard about Jekyll?](/images/post7-githubpages.jpg)  
_This link changed my thesis process_
{: style="text-align: center"}

## Long story short

[Jekyll](https://jekyllrb.com/) is the website platform I always dreamt about. I know this blog doesn't look **exceptional**, but you can't imagine how handy it is to edit and organize all my project-related information.

Basically, all I had was a strong background in HTML/CSS, but I have to admit I was a little rusty. It took me half of a Lynda course on Jekyll and a few hours playing around to get the gist of it.

The best part: it's completely open source and anyone can fork (basically, copy and modify) this whole structure through [this website's GitHub page](https://github.com/guibueno/guibueno.github.io). It'd be my pleasure to help you with that.

> "What's so special about Jekyll, Gui?"

Let me quickly walk you through the process of adding content to this website. For example, the meeting I had with [Nissa](/people/nissa.html) in early february.

### 1. Create a local .markdown file

![Step 1](/images/post7-nissa.jpg)
_Step One_
{: style="text-align: center"}

This is a basic markdown file that you can write on any text editor. I created the fields (date, title, topics, results, ...)and I populated it accordingly. No coding, no formatting, no specific software needed.

### 2. I save this file on the right place

![Step 2](/images/post7-rightplace.jpg)  
_Step Two_  
{: style="text-align: center"}

No secret here. It's only a matter of placing the meeting log into the "_meetings" folder. This is called a **collection**, and I have created a few of them: meetings; docs, posts, deadlines, etc.

### 3. Jekyll does all the processing

... and returns .html pages, as well as updated lists.

Take a look at [this meeting's own page](http://localhost:4000/meetings/2016-02-05-nissa.html). 

Jekyll automatically adds a link to this page on [Nissa's page](/people/nissa.html).

#### In a nutshell...

In this case, I only needed to worry about **content**, that is, what happened in the meeting I had with Nissa. 

I didn't do any formatting, I didn't have to deal with adjusting text indent, creating bullet points, creating a new page or anything else. I simply worked on a text file in my own computer.

### 4. Finally

This is the process for everything, from adding new blogposts to improving the sections of my design documents. The last step involves some simple terminal commands:

        git add --all .
        git commit -m "New updates"
        git push

Done! It's all online and accessible at [guibueno.github.io](http://guibueno.github.io)

## Final remarks

Although it was probably a little late to find out about Jekyll and use it in my thesis website, I haven't felt this excited about a tool or platform in a _looooooong_ time. 

I'm sure that I'll be working with it more often from now on. I'm sure that I'll keep learning its functions and that things are going to become easier in the future.

This was a completely unexpected skill I developed in my thesis process, and I couldn't be happier about it.