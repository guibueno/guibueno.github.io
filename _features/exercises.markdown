---
title: Exercises
layout: doc
section: design
---

### In a nutshell

**Exercises** are focused practices that prompt and scaffold learners to produce communicative utterances in their target language.

### Within the narrative

Infected learners also develop the capacity to talk to other language bugs. Each bug is interested in one particular topic or action, such as knowing about the family, the house, or the routine of learners.

### Association with existing resources

In the past, language schools typically used printed materials (Liu, 2009, p. 521) and "audio-cassettes or audio CDs of pre-recorded listening materials" (Kukulska-Hulme; Shield, 2007, p. 2) to engage learners in speaking practice.

**LanguageBug** exercises are essentially adaptations of these materials, with a few significant improvements:

* The pace of activities is very fast, to make it very challenging,
* *Exercises* prompt learners with both visual/written and audio clues, and
* *Principles* will scaffold learners before practicing through activities.

### Functions

* Engage learners in speaking practice from the beginning,
* Introduce learners to sentence structure without using grammar,
* Help learners build relevant and personal vocabulary, and
* Explain to learners why it is relevant to learn the contents in each exercise.

### Example: **Self-introduction**

#### What is it?

"*Self-introduction*" is the most important exercise within LanguageBug. It introduces learners to multiple sentences that are extremely relevant to any language speaker, such as "*My name is _____*"  and "*I live in ____*". 

By completing sentences with personal information, such as the color of their eyes ("*My eyes are ____*"), learners will also acquire vocabulary that is relevant to their individual background and experiences.

#### Why?

* Essential sentences for communication and survival,
* Introduces learner to relevant, conversational vocabulary,
* Help learners become comfortable presenting themselves, and
* Implicitly teaches learners different sentence structures.

#### Script

* Show self-introduction sentence in Portuguese with a blank space.
* *Audio*: play audio of this incomplete sentence in Portuguese.
* Show the translation of that sentence in English.
* *Audio*: play audio of this incomplete sentence in Portuguese.
* *Audio*: play audio of the whole sentence (with sample answer).
* (If new vocabulary) Introduce learner to possible responses.
* Ask learner to repeat after the audio, with his/her information.
* Play complete audio again, and ask learners to repeat.
* Repeat all steps with the following sentence.
* Show and play the audio of the two sentences in Portuguese.
* Ask learner to repeat those two sentences with his/her info.
* Repeat procedure, increasing the number of sentences.

### Scalability

Within the scope of this thesis project, **LanguageBug** only covers basic Novice-level content, but there are certainly more words and phrases that could be integrated to the exercises. In addition to that, it is always possible to keep improving the selection of words and expressions based on feedback from learners and user observation.

There could also be many other ways to foster speaking practice, besides the ones that **LanguageBug** features at this moment. Getting to know other approaches to language learning and teaching may provide insights on the creation of new exercises. The architecture of **LanguageBug** would make it easy to integrate them.

Finally, bugs could be further developed as characters with particular interests, so that learners could have different conversations with different bugs based on their interests. For example, a learner wishing to speak Portuguese in professional settings could learn relevant content by interacting with a "*Business Bug*" character.

### Current exercises

{% for exercise in site.exercises %}
* [{{ exercise.title }}]({{ exercise.url | prepend: site.baseurl }}){:target="blank"}{% endfor %}

### Related FAQ

* No corrections?
* What about accuracy?

### Theoretical foundation

#### Constructivism

The constructivist notion that knowledge is constructed, not transmitted (Smith; Ragan, 2005) supports the design of *Exercises*. Learners interact with the same *Exercises* several times and keep updating their perceptions and mental models.

This is part of what Piaget describes as *disequilibrium* and *accommodation* (Martinez, 2010). Rather than being a passive receiver, learners have an "active position of trying to make sense of the world” (Martinez, 2010, p. 198).

*Exercises* help learners "regulate the sequence of relevant actions" (Reiser; Tabak, 2014, p. 47). The goal is to reduce guidance gradually, so that "learners appropriate this guidance and begin to regulate their own actions" (Reiser; Tabak, 2014). 

#### Embodied Cognition

LanguageBug assumes the embodied perspective on learning and instruction:

> "Simply stated, the embodied perspective takes seriously that our physical bodies actually play a very important and, until quite recently, overlooked role in how we think and act in the world” (Lee, 2014, p. 6)

The body plays a crucial role in the process of trying to speak words/sentences in a foreign language. It does so by:

* hearing and processing unfamiliar, meaningless, speech sounds,
* attempting to understand, memorize, and mimic those sounds, while
* making adaptions or even playing with their vocal apparatus.

The goal of *Exercises* is to provide learners with a safe environment to embody their cognitive process. 

The fast-paced sequence of words does not allow learners to "think for too long," in the traditional sense of the word. On the contrary, it understands that “manipulating the body manipulates how we think” (Lee, 2014, p. 10), therefore, it foster actions.

#### Cognitive Load

According to the Cognitive Load Theory (Sweller, 2010), working memory has limited processing capacity. Therefore, instruction should only present information that is relevant to the goal of "schema acquisition and automation" (Sweller, 2010, p. 43).

Based on those principles, *Exercises* only display what is relevant to the goal of language learning. This means that words, sentences, instructions and translations are present in these practices, but interactive buttons, images, and keyboards are not.

### Full list of Exercises

See: [*Appendix 1 - Exercises*](/docs/appen-list-of-exercises.html)