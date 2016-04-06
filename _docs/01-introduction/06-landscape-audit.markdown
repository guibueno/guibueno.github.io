---
layout: doc
title: Landscape Audit
section: intro
incomplete: yes
problem: "it has disorganized information from Milestones 1 and 2, mixed with recent product analyses"
workon:
  - "Add the analyses of Rosetta-Stone and Babbel"
  - "Add brief description of other categories of products"
---

As described in the Introduction, the landscape of language learning tools and technologies is vast and diverse. This landscape audit only analyzes the **asynchronous** **language courses** category, which also consists of a large group of services. These services can be roughly divided into two groups: (1) traditional, famous and widely used courses and (2) recent, innovative, approaches.

### Product Analyses

<ul>

  {% for landscapeaudit in site.landscapeaudit %}

    <li>
      <a href="{{ landscapeaudit.url | prepend: site.baseurl }}">{{ landscapeaudit.title }}</a>
    </li>

  {% endfor %}

</ul>

Group (1) corresponds to services that have millions of registered users and typically cover many different languages. The multi-million dollar company Rosetta-Stone qualifies as its main example, followed by Duolingo, a much newer service (2011) that has grown incredibly fast. Other services include, but are not limited to: [Livemocha](http://livemocha.com/), [Busuu](https://www.busuu.com), [Memrise](https://www.memrise.com/), and [Babbel](https://www.babbel.com/).

Group (2) includes services that are not as consolidated, therefore not as well-known, mainly because they were founded more recently. These services are supposedly challenging the most traditional approach to language learning in any manner. Some examples are: [Mango Languages](https://www.mangolanguages.com/), [Lingvist](https://lingvist.io/), [Fluent in 3 Months](http://www.fluentin3months.com/), [Add1Challenge](http://add1challenge.com/), [Baselang](http://baselang.com) and [The Mimic Method](http://mimicmethod.com/).

Group (1) represents the traditional hegemony of CALL systems, while Group (2) samples what is expected from the current new approaches. In a more detailed version of this landscape audit, I intend to analyze them separately based on how they foster learning and trying, as well as how much customization they allow users to perform.

**LANDSCAPE AUDIT**

**The Five Cornerstones Framework**

As part of this Landscape Audit, I created a simple framework (which needs further development) to evaluate other language learning services in regards to the main theories/concepts that support this project: **emotion**, **metacognition**, **Growth Mindset**, **risk-taking**, and **deliberate practice**. During this section, I will refer to these concepts as *The Five Cornerstones*.

For each of these terms, I listed a few examples of design feature indicators, that is, features that could indicate a deliberate intention to address each term. For example, let’s assume *Language Learning Service* *A*, at a certain point, displays to its user the following message:

*"**This section may seem a little complicated to some people at first, but you’ll be able to it!"*

In this case, it indicated that the design of *Language Learning Service A* addresses, in a deliberate and explicit way, the language learner’s emotions. Although it is impossible to cover all ways in which services may address each of The Five Cornerstones, this list does a good job in making it simpler to rate services in respect to different areas.

*Tables 1, 2, 3, 4, and 5* provide a reference to understand the rating and analysis of each service.

<table>
  <tr class="diff title">
    <td>Indicators of EMOTION</td>
  </tr>
  <tr>
    <td>Difficulty acknowledgement: The service recognizes some of the difficulties faced by learners and explicitly points them out to the learner through statements or design features. e.g.: "You may find it difficult to speak this sentence at first, but keep practicing and you’ll make it".</td>
  </tr>
  <tr class="diff">
    <td>“Have Fun!” attitude: The service endorses a loosen attitude towards language learning, thus allowing learners to work on their second/foreign languages in a relaxed way. E.g.: “You won’t memorize it all now, but this is fine”, “You’ll see this again”, etc.</td>
  </tr>
  <tr>
    <td>Assessment of learner’s motivation: The service explicitly refers to, addresses, or measures the learner’s motivation, as a way to recognize possible issues and/or problems. E.g.: “You have been studying every day for the past week!”, badges, etc.</td>
  </tr>
  <tr class="diff">
    <td>Anxiety strategies: The service addresses the issue of Foreign Language Anxiety and/or provides strategies that can help learners deal with it. E.g.: breathing techniques, speak-aloud incentives, placing priority on communication over perfection, etc.</td>
  </tr>
</table>


*Table 1 - Indicators of EMOTION*

<table>
  <tr class="diff title">
    <td>Indicators of METACOGNITION</td>
  </tr>
  <tr>
    <td>Learning Strategies: The service, rather than merely displaying the content to be learned, instructs the learner/user on how to proceed with his/her learning experience. E.g.: "Try to find cognates in this text, because they are helpful", “Say this as fast as you can to gain speed”, etc.</td>
  </tr>
  <tr class="diff">
    <td>Why you are learning this: The service explains why each content is important to the learning of a foreign language, rather than merely asking a passive user to memorize content. E.g.: “This is a very common expression that most people say in informal conversations”.</td>
  </tr>
  <tr>
    <td>The learning science: The service provides to the learner with some insights or explanations on how to make his/her learning experience more efficient. E.g.: brief descriptions of how the brain works, how to memorize content more effectively, how to practice each section, etc.</td>
  </tr>
  <tr class="diff">
    <td>Short-term and long-term goals: The service explains what is the purpose of each activity in order to keep learners focused on specific goals. E.g.: “Here we are going to practice speed, so don’t worry too much about vocabulary or pronunciation, but just try to answer these questions as fast as you can. This will help you make your language retrieval more automatic”</td>
  </tr>
  <tr>
    <td>Personal troubleshooting: The service helps learner to identify where the problem is when something goes wrong, and also addresses such issues. E.g.: “If you are not able to understand this, it may be time to practice again in the Greetings section.</td>
  </tr>
  <tr class="diff">
    <td>Alternative strategies: In case the learner is not finding a specific exercise useful or helpful, or the learner is facing any kind of difficulty with a specific activity, the service provides learner with alternative exercises to explore the same content. E.g.: “Change activity” button, which makes the content remain unchanged, but find a different approach to let user practice.</td>
  </tr>
</table>


*Table 2 - Indicators of METACOGNITION*

<table>
  <tr class="diff title">
    <td>Indicators of GROWTH MINDSET</td>
  </tr>
  <tr>
    <td>Talents/Skills: the service addresses the topic of Growth Mindset either indirectly or by stating explicitly that skills and talents are not fixed, that is, it is possible to succeed in learning a foreign language with effort and the appropriate strategies. E.g.: "You are able to do this. Even if you struggled with it in the past, while it seemed easy to other people."</td>
  </tr>
  <tr class="diff">
    <td>Get Better: rather than encouraging a “Be Good” mindset, the service instructs its learners to always improve themselves. E.g.: “Notice your progress! After only one week, you are able to complete this activity 2.3x faster than at the beginning”, etc.</td>
  </tr>
</table>


*Table 3 - Indicators of GROWTH MINDSET*

<table>
  <tr class="diff title">
    <td>Indicators of RISK-TAKING</td>
  </tr>
  <tr>
    <td>Make mistakes: Rather than implying a corrective approach, the service makes it clear to its learners that making mistakes is an inevitable part of the learning process, thus it encourages them to make attempts, even if the chances to make a few mistakes is high. E.g.: choosing a "Get it right at the end" approach, rather than providing constant Corrective feedback (CF)</td>
  </tr>
  <tr class="diff">
    <td>Focus on communication: Rather than pressuring the learner to achieve perfection in each new content, the service encourages learners to try communicating with other people from the very first lessons. E.g.: “Now introduce yourself in Portuguese to other learners”.</td>
  </tr>
  <tr>
    <td>Contexts for trying: The service offers learners the possibility to interact with native speakers and/or other users of the same service to practice the target language and take risks.</td>
  </tr>
</table>


*Table 4 - Indicators of RISK-TAKING*

<table>
  <tr class="diff title">
    <td>Indicators of DELIBERATE PRACTICE</td>
  </tr>
  <tr>
    <td>Timed practices: The service asks learners to engage in activities and/or exercises for a specific, limited time, which ensures that the learner will allow this time for practicing purposes.</td>
  </tr>
  <tr class="diff">
    <td>Focused practices: The service offers activities and/or exercises that require the learner to have a high level of focus to complete. E.g.: "Let’s make it faster! Try speaking all these 10 self-introduction sentences in no more than 20 seconds in 3, 2, 1… start!".</td>
  </tr>
  <tr>
    <td>Action prompts: In order to reduce the extraneous cognitive load of the learner, the service provides its learners with all activity prompts or commands, to which the learners respond. E.g.: “Say: ‘My name is ___’ in Portuguese. (3, 2, 1) Now say ‘I’m from the U.S. in Portuguese”, ...</td>
  </tr>
</table>


*Table 5 - Indicators of DELIBERATE PRACTICE*

The Landscape Audit framework, based on *The Five Cornerstones* and its indicators, will function as a way to identify which of the main concepts is addressed by each service. Again, let’s take the *Language Learning Service A *as an example

<table>
  <tr  class="diff title">
    <td></td>
    <td>EMOTION</td>
    <td>META-
COGNITION</td>
    <td>GROWTH MINDSET</td>
    <td>RISK-TAKING</td>
    <td>DELIBERATE PRACTICE</td>
  </tr>
  <tr>
    <td>Language Learning Service A</td>
    <td>---X---</td>
    <td>---X---</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>


*Table 6 - The Five Cornerstones Framework applied to example Language Learning Service A*

From this example, in my hypothetical analysis of *Language Learning Service A*, I found evidence (indicators) to support the idea that this service addresses the learner’s emotions and provides its learners with metacognitive support. On the other hand, it does not address explicitly the Growth Mindset, neither encourages risk-taking, nor provides learners with deliberate practice prompts.

## Services

The landscape of language learning tools and technologies is very diverse. This landscape audit only analyzes asynchronous language learning courses and services, which is also vast by itself.

These services can be roughly divided into two groups: (1) traditional, famous and widely used courses and (2) recent, innovative, approaches. Group (1) represents the traditional hegemony of CALL systems, while Group (2) samples what is expected from the current new approaches.

Group (1) corresponds to services that have millions of registered users and typically cover many different languages. The multi-million dollar company Rosetta-Stone qualifies as its main example, followed by Duolingo, a much newer service (2011) that has grown incredibly fast. Other services include, but are not limited to:[ Livemocha](http://livemocha.com/),[ Busuu](https://www.busuu.com),[ Memrise](https://www.memrise.com/), and[ Babbel](https://www.babbel.com/).

Group (2) includes services that are not as consolidated, therefore not as well-known, mainly because they were founded more recently. These services are supposedly challenging the most traditional approach to language learning in any manner. Some examples are:[ Mango Languages](https://www.mangolanguages.com/),[ Lingvist](https://lingvist.io/),[ Fluent in 3 Months](http://www.fluentin3months.com/),[ Add1Challenge](http://add1challenge.com/),[ Baselang](http://baselang.com) and[ The Mimic Method](http://mimicmethod.com/).

Due to the number and complexity of language learning services present in this landscape audit, rather than describing and addressing one by one, the *Five Cornerstones Framework* will be applied to both Group (1) and Group (2) on *Tables 7 and 8*. Following both tables, you can find a brief interpretation of the findings and results.

<table>
  <tr class="diff title">
    <td colspan="6">GROUP 1</td>
  </tr>
  <tr class="diff title">
    <td></td>
    <td>EMOTION</td>
    <td>META-
COGNITION</td>
    <td>GROWTH MINDSET</td>
    <td>RISK-TAKING</td>
    <td>DELIBERATE PRACTICE</td>
  </tr>
  <tr>
    <td>Rosetta-Stone</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>---X---</td>
  </tr>
  <tr class="diff">
    <td>Duolingo</td>
    <td>---X---</td>
    <td>---X---</td>
    <td></td>
    <td></td>
    <td>---X---</td>
  </tr>
  <tr>
    <td>Livemocha</td>
    <td></td>
    <td>---X---</td>
    <td></td>
    <td>---X---</td>
    <td>---X---</td>
  </tr>
  <tr class="diff">
    <td>Busuu</td>
    <td>---X---</td>
    <td></td>
    <td></td>
    <td></td>
    <td>---X---</td>
  </tr>
  <tr>
    <td>Memrise</td>
    <td></td>
    <td>---X---</td>
    <td></td>
    <td></td>
    <td>---X---</td>
  </tr>
  <tr class="diff">
    <td>Babbel</td>
    <td>---X---</td>
    <td></td>
    <td></td>
    <td></td>
    <td>---X---</td>
  </tr>
</table>


*Table 7 - Comparative Analysis of Group 1*

*Table 7* makes it possible to realize that most of the well-established online CALL systems rely on deliberate practice, while almost completely ignoring the learners’ emotions, risk-taking capacities, and mindset beliefs. In other words, the more traditional and well-established language learning services are usually the ones who least explore the potential of customization and user interaction that the web offers, besides leaving the psychology of learning almost completely aside. 

On the contrary, these services tend to merely reproduce the oldest, most common strategies in language teaching, based on approaches such as drilling, and exposition to content, while ignoring concrete academic evidence that these are not the most efficient ways to teach and learn languages. Being that they are, nonetheless, very successful, it might be the case that most language learners have a similar perception over language learning, that is, that to learn a language means to be exposed to segmented content and do drills as practice. 

Rosetta-Stone, as an example, in spite of being the most successful language learning technology business, is the one that has taken least consideration for the psychology of learning. In other words, Rosetta-Stone does not represent any real, concrete innovation in language learning, but only reproduces the traditional settings in an online environment. This is what differentiates it from the services in Group (2), which aim to challenge and disrupt the traditional approach to language learning, by offering methods that are supposedly more efficient and innovative.

<table>
  <tr class="diff title">
    <td colspan="6">GROUP 2</td>
  </tr>
  <tr class="diff title">
    <td></td>
    <td>EMOTION</td>
    <td>META-
COGNITION</td>
    <td>GROWTH MINDSET</td>
    <td>RISK-TAKING</td>
    <td>DELIBERATE PRACTICE</td>
  </tr>
  <tr>
    <td>Mango Languages</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>---X---</td>
  </tr>
  <tr class="diff">
    <td>Lingvist</td>
    <td></td>
    <td>---X---</td>
    <td></td>
    <td></td>
    <td>---X---</td>
  </tr>
  <tr>
    <td>Fluent in 3 Months</td>
    <td>---X---</td>
    <td>---X---</td>
    <td>---X---</td>
    <td>---X---</td>
    <td>---X---</td>
  </tr>
  <tr class="diff">
    <td>Add1 Challenge</td>
    <td>---X---</td>
    <td>---X---</td>
    <td>---X---</td>
    <td>---X---</td>
    <td>---X---</td>
  </tr>
  <tr>
    <td>Baselang</td>
    <td>---X---</td>
    <td></td>
    <td></td>
    <td></td>
    <td>---X---</td>
  </tr>
  <tr class="diff" >
    <td>The Mimic Method</td>
    <td>---X---</td>
    <td>---X---</td>
    <td>---X---</td>
    <td>---X---</td>
    <td>---X---</td>
  </tr>
</table>


*Table 8 - Comparative Analysis of Group 2*

Even from a first glance, *Table 8* is notably different from *Table 7*, and what differentiates both is the frequency of "X" in the table cells: while *Table 7* shows them very seldom, *Table 8 *has almost no blank spaces. This means that the services in Group (2), which represent the innovation and disruption in language learning, are the ones most concerned with the psychology of learning, therefore they target more often their learners’ emotions, metacognition, mindsets, risk-taking capacities, without missing deliberate practice. 

Besides that, most of these services claim to offer a new approach to language learning, which is supposedly more effective than the traditional one. For example, *Mango Languages* offers learners the opportunity to watch foreign films with interactive subtitles (that you can click on words to have them pronounced or translated) in both the user’s native and target languages. 

The *Mimic Method*, on the other hand, focuses exclusively in pronunciation, leaving aside any vocabulary, grammar, writing, and even communication skills. Its principle is that by learning how to speak the phonemes in the target language correctly, learners will be able to recognize better the sounds of this language, so they will also learn faster (but later, not in any course by the *Mimic Method*) all the vocabulary and structure that they need. *Baselang*, on the other hand, is basically a service of Spanish tutors that are available 24/7 both online and through SMS. Disregarding their teaching methods, their business model is innovative by itself, as learners can have as many lessons as they want with actual tutors for a fixed price. 

**Disclaimer**

As most of these services are not only very complex and complete, but also paid, I was not able to perform an actual, complete, personal analysis of all of them. Some of my considerations were based on reviews by other authors, information collected on the Internet, informal conversations with users of each of those services and free trials of each service. Due to that, despite my effort to reduce the possibility of incorrect or imprecise information, there might be a few items that I could have addressed more precisely. I apologize for any possible misplaced information and I sincerely ask you to contact me in case you identify them.