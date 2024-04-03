---
title: "Demystifying Deep Reinforcement Learning-Based Autonomous Vehicle Decision-Making"
tags: ["Control", "Reinforcement Learning"]
path: "research/2023-05-08-highway-attn"
excerpt: This work focuses on the interpretability of an attention-based DRL framework.
cover: "./overview.png"
priority: 3
links:
  - name: "arXiv"
    url: "https://arxiv.org/abs/2403.11432"
---

**Demystifying Deep Reinforcement Learning-Based Autonomous Vehicle Decision-Making**

**Hanxi Wan**, Pei Li, Arpan Kusari

With the advent of universal function approximators in the domain of reinforcement learning, the number of practical applications leveraging deep reinforcement learning (DRL) has exploded. Decision-making in automated driving tasks has emerged as a chief application among them, taking the sensor data or the higher-order kinematic variables as the input and providing a discrete choice or continuous control output. However, the black-box nature of the models presents an overwhelming limitation that restricts the real-world deployment of DRL in autonomous vehicles (AVs). Therefore, in this research work, we focus on the interpretability of an attention-based DRL framework. We use a continuous proximal policy optimization-based DRL algorithm as the baseline model and add a multi-head attention framework in an open-source AV simulation environment. We provide some analytical techniques for discussing the interpretability of the trained models in terms of explainability and causality for spatial and temporal correlations. We show that the weights in the first head encode the positions of the neighboring vehicles while the second head focuses on the leader vehicle exclusively. Also, the ego vehicle's action is causally dependent on the vehicles in the target lane spatially and temporally. Through these findings, we reliably show that these techniques can help practitioners decipher the results of the DRL algorithms.

Find more in the [paper](https://arxiv.org/abs/2403.11432)!
