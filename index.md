---
layout: page
title: Redirecting...
permalink: /
---

<script>
  (function () {
    var baseUrl = "{{ site.baseurl | default: '' }}";
    window.location.replace(baseUrl + "/zh-TW/");
  })();
</script>

If you are not redirected, go to
<a href="{{ "/zh-TW/" | relative_url }}">中文首頁</a>.
