---
title: "Project: Object Detection and Manipulation with 5 DoF Robotic Arm"
tags: ["Perception", "Control", "Planning"]
path: "research/2023-12-31-armlab"
excerpt: A 5 DoF robotic arm is programmed to autonomously detect blocks of different sizes and colors using a RGB-D camera, and arrange them into desired patterns.
cover: "./demo.png"
priority: 3
links:
  # - name: "GitHub"
  #   url: "https://github.com/WanHanxi/na565-monocon"
---

# Introduction

The project focuses on programming a 5-DOF RX200 robotic arm to achieve autonomous task execution through acting, sensing, and reasoning. The methodology involves computer vision for object detection using OpenCV, kinematics (both forward and inverse) for arm control and reaching desired positions, and path planning with state machines for task sequencing. The tasks performed include basic motion like grasping and dropping, "teach and repeat" functionality for learning and replaying trajectories, workspace and camera calibration using Apriltags, block detection based on color and size, and various block manipulation activities such as sorting, stacking, and lining up blocks in a specific color order.

Check out our [demo video](https://drive.google.com/file/d/1nJrWqZl4-WEI06rvNYoTyAwL1pB78SKU/view?usp=sharing) and [report](https://drive.google.com/file/d/1E_wb96HwN5uEBThx0b9aN6NU2-ehE5MC/view?usp=sharing).
