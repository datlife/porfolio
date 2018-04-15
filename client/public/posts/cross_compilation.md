# Cross-Compilation TensorFlow for NVIDIA Jetson TX2

This article would try to convice why you should bother to build a cross-compilation Tensorflow from source, rather on native machine. Then, I show you how you can build it yourself.

## Motivation

### **TLDR**: It speeds up the building time a lot, depending on how fast your host machine.

Nvidia Jetson TX2 is a great embedded system for deploying AI applications. Tensorflow is a, machine learning framework, standout