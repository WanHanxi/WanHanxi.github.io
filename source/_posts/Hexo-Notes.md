---
title: Hexo Notes
date: 2020-12-20 16:06:43
tags:
---

# Generate New Markdown

```bash
#new md file
npx hexo new '<title>'
```

Edit your markdown file. You can find **title.md** in /source/_posts

```bash
#generate
npx hexo g
npx hexo s #set up local server

#deploy
npx hexo clean #clean cache
npx hexo g -d
```

# Generate Draft

```bash
#optional: generate draft
npx hexo new draft '<title>'
#saved in /source/_drafts

#push
npx hexo publish [layout] <filename>
```



# Reference

[超详细Hexo+Github Page搭建技术博客教程【持续更新】_个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000017986794)