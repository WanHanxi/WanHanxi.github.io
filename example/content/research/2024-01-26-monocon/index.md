---
title: "Project: Improved MonoCon"
tags: ["Perception"]
path: "research/2024-01-26-monocon"
excerpt: A monocular 3D object detection method without exploiting any extra information such as lidar and depth.
cover: "./demo.png"
priority: 3
links:
  - name: "GitHub"
    url: "https://github.com/WanHanxi/na565-monocon"
---

# Introduction

3D object detection has emerged as a pivotal challenge in the realm of computer vision, particularly in applications like autonomous driving and robotics.

This project delves into MonoCon, a state-of-the-art neural network framework designed to tackle this challenge using a single camera input. This method proposes a simple but effective formulation for monocular 3D object detection without exploiting any extra information such as lidar and depth. It learns Monocular Contexts, as auxiliary tasks in training, to help monocular 3D object detection. We further improved the MonoCon with data augmentation.

We tested MonoCon in the KITTI benchmark on the car category under different scenarios and output 3D bounding box prediction to evaluate the performance. Our improved MonoCon is more robust to different weather. It shows better precision than the original one in a foggy scenario.

Find more in the [Github repo](https://github.com/WanHanxi/na565-monocon) and our [report](https://github.com/WanHanxi/na565-monocon/blob/main/NAVARCH565_Team14.pdf)!
