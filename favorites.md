---
layout: page
title: Favorites
permalink: /favorites.html
---

## Podcasts[^1]

I listen to lots of podcasts but these are some of my favorites.

*Pro-tip: Listen to all podcasts at least 1.75x speed.*

{% assign fav_podcasts = site.data.podcasts.podcasts | where: "archive", "false" | sort:"title" %}
{% for podcast in fav_podcasts%}
### [{{podcast.title}}]({{podcast.url}}){:target="_blank"}

{{podcast.description}}

{% if podcast.favorite_episodes %}
{% assign fav_episodes = podcast.favorite_episodes | sort: "title" %}
{% for fav in fav_episodes %}
- [{{fav.title}}]({{fav.url}}){:target="_blank"} - {{fav.description}}
{% endfor %}
{% endif %}
{% endfor %}

## Notes

[^1]: Sorted alphabetically
