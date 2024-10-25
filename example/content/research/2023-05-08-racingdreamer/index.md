---
title: "Multimodal Model-Based Reinforcement Learning for Autonomous Racing"
tags: ["Perception", "Planning", "Reinforcement Learning"]
path: "research/2023-05-08-racingdreamer"
excerpt: "E. Shrestha, **H. Wan**, C. Reddy, Y. Zhuang, and R. Vasudevan, “Multimodal Model-Based Reinforcement Learning for Autonomous Racing,” Deployable RL From Research to Practice @ Reinforcement Learning Conference 2024."
cover: "./overview.png"
priority: 3
links:
  - name: "arXiv"
    url: "https://openreview.net/forum?id=wXjsMTZzxF"
  # - name: "arXiv"
  #   url: "https://arxiv.org/abs/2305.04750"
---

**Multimodal Model-Based Reinforcement Learning for Autonomous Racing**

Elena Shrestha, **Hanxi Wan**, Chetan Reddy, Yulun Zhuang, Ram Vasudevan

This paper illustrated that multimodal perception combining egocentric LiDAR and RGB camera improves robustness of the world model in model-based reinforcement learning.

Model-based reinforcement learning (MBRL) techniques have recently yielded promising results for real world autonomous racing using high-dimensional observations. MBRL agents, such as Dreamer, solve long-horizon tasks by building a world model and planning actions by latent imagination. This approach involves explicitly learning a model of the system dynamics and using it to learn the optimal policy for continuous control over multiple timesteps. As a result, MBRL agents may converge to sub-optimal policies if the world model is inaccurate.

To improve state estimation for autonomous racing, this paper proposes a self-supervised sensor fusion technique that combines egocentric LiDAR and RGB camera observations collected from the F1TENTH Gym. The zero-shot performance of MBRL agents is empirically evaluated on unseen tracks and against a dynamic obstacle. This paper illustrates that multimodal perception improves robustness of the world model without requiring additional training data. The resulting multimodal Dreamer agent safely avoided collisions and won the most races compared to other tested baselines in zero-shot head-to-head autonomous racing.

Find more in the [paper](https://openreview.net/forum?id=wXjsMTZzxF)!
