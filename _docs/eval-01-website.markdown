---
title: Website
layout: doc
section: eval
---

Knowing that formative evaluation is an efficient strategy to achieve better results, I created a valuable, customized tool to store and display all information related with **LanguageBug**: an open-access website. This website became at the same time my central workplace and a channel to showcase my progress. It offered my community of collaborators (my peers, instructors, and committee members) the constant opportunity to access and review my work during all stages of development.

In this section, I describe the main functions, features, and mechanisms of this website. In addition to that, I explain and illustrate how it has impacted my design decisions at different times and stages.

### Git, *Jekyll*, *GitHub Pages*

Facing the need to have a simple, easy, and fast way to communicate with my community of collaborators, I began to search for softwares and tools that could be helpful. What I first realized was that I needed some sort of versioning control to document my process, since I was would be working on a document **and** on a software at the same time.

> "What is "version control", and why should you care? Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later". (Chacon; Straub, 2014)

I have had a brief experience using Git, which through research I confirmed to be a suitable tool:

> "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency" (Git, n.d.)

My first attempt was to create a private repository on BitBucket, a platform I had already used. I did so and added some of my commitee members (the ones that with the most technical expertise) as contributors, so that:

- they would be able to see, comment, and change any file at anytime,
- while I would be able to keep track of those changes and comments.

[![BitBucket Repo]({{site.baseurl}}/images/eval-website-bitbucket.png)]({{site.baseurl}}/images/eval-website-bitbucket.png)
{: style="text-align: center"}

However, after one week, I realized that the engagement was insufficient and that using BitBucket would limit the access to my project to only a few people who could operate git. Therefore, I kept looking for alternatives and found out about *Jekyll* and *GitHub Pages*:

> "*Jekyll*: A tool for creating static HTML websites from a set oftemplates and data. *Jekyll* is used by GitHub to create static web pages for GitHub hosted projects". (Wagstrom; Jergensen, 2012, p. 5)

I consulted with my I.T. specialist committee members [Daniel Negri](/people/daniel.html) and [Ludmilla Aires](/people/lud.html), who both agreed this tool would suit my needs. 

For about two weeks, I focused all my efforst into learning how to install, operate and build my thesis project website using those tools. Indeed, I am still in the process of learning/perfectioning such skills.

Additionally, this experience fulfilled a set of goals I have had since the beginning of the thesis course: 

- to learn to operate version control systems,
- to re-connect with coding, especially for web, and
- to give the access to my design process and products to anyone.

This process is further described on [Blog#7 New Thesis Website](/blog/2016/03/20/blog7-new-thesis-website.html).

### Centralization

After realizing the potentials of *GitHub Pages* + *Jekyll*, I designed this website to be my central workplace and project management tool. Here I briefly describe its funtions and sections.

#### Me

This section was designed to provide my basic biographic information, plus the list of committee members, their roles and contributions to the project. For example, by accessing the page titled *Nicole Pallares*, it is possible to see the written feedback provided by this committee member and an informal log of the meetings we have had.

[![Nicole's Page]({{site.baseurl}}/images/eval-website-nicole.png)]({{site.baseurl}}/images/eval-website-nicole.png)
{: style="text-align: center"}

#### Demo

The "Demo" section is designed to display and link to the responsive prototypes. In other words, while the final design document needs to be static, the website allows access to the interactive iterations that were build using either *MockingBot* or *Reveal.js*.

![reveal1.PNG](/images/prototype/image04.png)
{: style="text-align: center" class="reveal"}

#### Doc

By accessing the "Doc" page, users are able to see all sections of the design document, that is, of the final thesis paper. Each section comes from an individual local file and produces a particular *permalink*.

[![Doc section]({{site.baseurl}}/images/eval-website-doc.png)]({{site.baseurl}}/images/eval-website-doc.png)
{: style="text-align: center"}

By doing so, I am able to work seperately on each section, which has simplified and increased the speed of both my workflow and the process of getting feedback from my community of collaborators. 

For example, if I have been devoting time to the *Landscape Audit* section, I can simply send my community of collaborators a link to the Landscape Audit page and they will easily access it on any browser and device.

#### Logs

The "Logs" section was designed for accountability and management purposes. First, it provides a general landscape of my work: 

- my current goals,
- a list of taks and achievements
- the scheduled events
- my role in the next class meeting.

All this information is stored on a weekly basis, providing longitudinal information of my process. Thorugh these logs, my committee members and I are able to determine how well I am splitting my work time/energy.

This section also stores brief reports from all meetings. It prevents me from forgetting or losing valuable hints, notes, pictures, and sketches procuded during these formal or informal encounters.

Finally, the "Logs" section contains the most important upcoming deadlines and an entire *Blog* (or *Reflection Journal*) on which I freely discuss my design process, feelings, and uncertainties.

### Networked Software Development Ecosyste

By hosting this website on GitHub, all my thesis project files, including these very words, are open for anyone to access, modify, re-use, share, etc. In other words, *LanguageBug* qualifies as a Free / Open Source Software (F/OSS), aligning it with ideologies of which I am proudly supportive (Stallman, 2002; Coleman, 2013).

Therefore, even if **LanguageBug** has not yet received contributions from individuals who do not belong to my known community of collaborators. As Wagstrom and Jergensen (2012) state:

> "New project hosting sites such as GitHub, which brands itself as facilitating 'social coding' are changing the way open source is perceived and how it is practiced" (p. 1)

On the other hand, being *open* to social coding is merely good start, which does not guarantee that **LanguageBug** will be actually developed in a social way. Doing so helps me get comfortable with the archtecture and mechanisms of F/OSS, which could be helpful in the process of escalating to that point. In fact:

> "at there is still much to learn about the roles that individuals play in open source development and how we can best ensure that these projects are successful and that individuals get the support they need to continue to grow" (Wagstrom; Jergensen, 2012, p. 11)


* I want to make sure it stays like this, in a F/OSS way
* I went ahead and asked my peers and committee member for feedback through it
* Available at anytime, through a fixed link that showed my progress as it happened.
-- screenshots of different times of the website
-- screenshots of the storyboard conversation
* This communication would happen on a Slack channel
* it has worked very well
-- nick's feedback on adding images
* Work-in-progress draft