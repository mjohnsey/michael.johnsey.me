---
layout: page
title: Favorites
permalink: /favorites.html
---

## Podcasts
{% assign fav_podcasts = site.data.podcasts.podcasts | sort:"title" %}

{% for podcast in fav_podcasts%}
### [{{podcast.title}}]({{podcast.url}})

{{podcast.description}}

{% if podcast.favorite_episodes %}
{% assign fav_episodes = podcast.favorite_episodes | sort: "title" %}
{% for fav in fav_episodes %}
- [{{fav.title}}]({{fav.url}}) - {{fav.description}}
{% endfor %}
{% endif %}
{% endfor %}
