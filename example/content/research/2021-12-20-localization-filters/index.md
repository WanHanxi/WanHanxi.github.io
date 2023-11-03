---
title: "Project: Robot Localization, Kalman and Particle Filter"
tags: ["Localization"]
path: "research/2021-12-20-localization-filters"
excerpt: A comparison between Kalman filter and particle filter on robot localization task in PyBullet.
cover: "./demo.png"
priority: 3
links:
  - name: "GitHub"
    url: "https://github.com/WanHanxi/EECS498-Algo.Robotics-Project"
---

# Introduction

In localization problems, we want to know the current state (position, orientation, etc.) of objects as precisely as possible. However, due to the errors in measurements, data from sensors need to be processed to generate closer estimate of the state. Kalman filter and particle filter are two methods applied in this project to track the state of objects. Given indirect measurable variables (data from sensors), these two methods can give an estimate on the state which can not be directly measured (actual position, etc.).

The localization problems are widely seen and thus are of great significance. Robots need to be informed of its pose in the environment to carry out tasks. When driving, the navigators need to know the precise location of our vehicles. Filters can be applied to data from GPS and gyroscopes to reduce error.

The objective of this project is to compare the performances of Kalman filter and particle filter in the same scenario. A PR2 robot is executed to go through a path in an environment with obstacles and a location sensor is simulated to give the position of the robot with random error. Kalman filter and particle filter are applied respectively to give the estimate of pose of the robot. Their accuracy will be compared.

Find more in the [Github repo](https://github.com/WanHanxi/EECS498-Algo.Robotics-Project)!
