# Telepresence System for Remote Participant

## Overview

![Alt text](telepresence_system.png?raw=true "System Architecture")

The system allows remote users to participate in live events (football matches, concerts) from their homes as if they were in the real places.
360 video/audio captured from a 360 camera located at the remote site are streamed to the user's location using ``WebRTC protocol``, which are watched by users using VR Headsets. The user can interact with people in the remote site using his/her voice. When testing in local networks, the one-way delay of the system is approximately 0.3-0.5 sec for 2K video at 30fps.

For ``WebRTC``, the signalling between the local and remote peers are carried out by using a ``WebSocKet``-based server. Ricoh Theta V camera is used to record 360-degree video. At the user side, HTCV Vive Pro VR Headset is used to view 360 video.

 - Remote Agent: Windows 10 (It is OK to use MacOS, but you will nedd to manually compile and install the driver (https://github.com/ricohapi/libuvc-theta/tree/theta_uvc). Tested on Ubuntu 20.04 but currently not working)
 - Local Agent: Windows 10 (in order to support HTC Vive Pro Headset)
 - Signalling Server: Same PC as the remote agent

## How to use
### Install driver for the camera
Download and install driver for Ricoh Theta V camera (Windows 10) from this link: //

*IMPORTART: Please make sure that the version of the driver is 1.0

