---
title: "Project: A Guided Tour to Neural Radiance Field"
tags: ["Machine Learning", "Perception"]
path: "research/2022-04-26-tinynerf"
excerpt: A course mini project for EECS 498 - Deep learning for Computer Vision 2022.
cover: "./nerf.png"
priority: 3
links:
  - name: "GitHub"
    url: "https://github.com/Jiayi-Pan/NeRF"
---

# Introduction

Novel view synthesis is an important problem in computer vision. It has a lot of applications such as video enhancement and virtual reality. *Neural Radiance Fields* (NeRFs) is a simple and powerful model for such kind of problem. It use the idea of **volume rendering** to train a model that implicitly contains the 3D information and samples from it to reconstruct the image. By encoding both position and viewing direction into the input, the NeRF model is able to "understand" the radiance distribution in the scene, thus reconstructing the image with better illumination details.

In this project, we reimplemented the NeRF method using pytorch and train it with smaller MLP and lower resolution images using only the "coarse" model so that it can quickly converge on smaller GPU.

Find more in the [Github repo](https://github.com/Jiayi-Pan/NeRF)!
