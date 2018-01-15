---
layout: page
title: Now
permalink: /now
---
_What is this? [Derek Sivers explains.](https://nownownow.com/about)_

_**TLDR:** This is not Twitter or Facebook. You won't find my latest picture or my thoughts on the latest news. This is to answer the question, **What is Michael focused on?**_ 

<hr />

## What I'm doing now

{% assign now_entries = site.data.now.entries | sort:"date" | reverse %}
{% assign most_recent = now_entries.first %}

{{most_recent.text}}

<em>{{most_recent.date}}</em>



## What was I doing in the past?

<ul>
{% for now in now_entries offset: 1%}
  <li>
    <p>{{now.text}}</p>
    <em>{{now.date | date: "%Y-%m-%d" }}</em>
  </li>
{% endfor %}
</ul>