---
layout: post
title:  Artificial Neural Network (কৃত্রিম নিউরাল নেটওয়ার্ক) - জিনিসটা কী? -০১
date:   2022-06-05 01:40:16
description: এই ব্লগে আমরা কৃত্রিম নিউরাল নেটওয়ার্ক-এর বিষয়ে প্রাথমিক ধারণা নিব
tags: কৃত্রিম নিউরাল নেটওয়ার্ক
categories: কন্সেপ্ট
---

## কৃত্রিম নিউরাল নেটওয়ার্ক (Artificial Neural Network) কী?

সহজভাবে, আমাদের ব্রেইন নিউরন নামে কিছু কোষ দিয়ে তৈরি। প্রত্যেকটা নিউরন গঠিত হয় সেলবডি, এক্সন আর ডেন্ড্রাইট দিয়ে। প্রতেকটা এক্সন ডেন্ড্রাইটের মাধ্যমে অন্য এক্সনে সাথে সংযুক্ত থাকে। যেকোন উদ্দিপককে (আলো, তাপমাত্রা, স্পর্শ, শব্দ ইত্যাদি ) আমাদের ব্রেইন ডেন্ড্রাইটের মাধ্যমে ইলেক্ট্রিক সিগন্যাল (আসলে ইলেক্ট্রোকেমিকেল সিগনাল) হিসেবে গ্রহন করে। সব সিগন্যাল প্রসেস করে সেলবডি। আর প্রসেসড সিগন্যাল অন্য নিউরনের কাছে পাঠানো হয় এক্সন-ডেন্ড্রাইটের মাধ্যমে।

    যখনই আমাদের ব্রেইন কোন উদ্দিপক পায়, তখনই নিউরন ট্রিগারর্ড হয় বা ইলেক্ট্রিক সিগন্যাল ফায়ার করে। 

{% include figure.html path="assets/img/blog_02/action_potential.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}

যত বেশি ইলেক্ট্রিসিটি প্রবাহ হয়, ডেন্ড্রাইটগুলো তত শক্তিশালী হয়। তাই আমরা কিছু স্মৃতি বেশিদিন মনে রাখি, আর কিছু স্মৃতি ভুলে যাই। যদিও এটা আরো জটিল প্রক্রিয়া, আমরা আপাতত এই সাধারণ আইডিয়াটা নিয়ে আগাব।

{% include figure.html path="assets/img/blog_02/neural_network.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}

    তাহলে সংক্ষেপে, ইনপুট -> ডেন্ড্রাইট -> সেলবডি -> এক্সন / আউটপুট ।

এখন এই আইডিয়া কাজে লাগিয়ে আমরা একটা আর্টিফিসিয়াল নিউরাল নেটওয়ার্ক এর ডিজাইন করব। আমরা প্রত্যেকটা সেলবডিকে লেয়ার (Layer), এক্সনকে নোড বা ইনপুট (Node/Input) এবং ডেন্ড্রাইটকে কানেকশন (Connection) মনে করি। তাহলে আমরা ব্রেইনের একটা কমপ্লেক্স গ্রাফ (Graph) পাব যেখানে অনেকগুলো লেয়ার, অনেকগুলো নোড আর অনেকগুলো কানেকশন আছে।

আমরা খুব ছোট একটি উদাহরণ নিব। কয়েকটা ইনপুট, দুইটা মধ্যবর্তী লেয়ার আর একটি আউটপুট। ইনপুটগুলো মধ্যবর্তী লেয়ারের নোডগুলোর সাথে সংযুক্ত। আমাদের মডেল ইনপুটগুলো গ্রহন করবে, মধ্যবর্তী লেয়ারগুলো ইনপুটগুলোকে প্রসেস করবে আর প্রসেসড ইনফরমেশন আউটপুটে দিবে। এই যে গ্রাফটা আমরা বানালাম, এটি একটি খুবই সাধারণ আর্টিফিসিয়াল নিউরাল নেটওয়ার্ক।

{% include figure.html path="assets/img/blog_02/ann.png" class="img-fluid rounded z-depth-1" zoomable=true %}

    তাহলে সংক্ষেপে, ইনপুট -> প্রসেসিং লেয়ার -> আউটপুট ।

সমস্যা হল, আমাদের ব্রেইন এত সহজ প্রক্রিয়ায় কাজ করে না। উপরের প্রক্রিয়াটা শুধুমাত্র একটা জেনেরালাইজড আইডিয়া মাত্র। এই জেনেরালাইজড আইডিয়ার উপর আমরা আমাদের প্রথম কৃত্রিম নিউরাল নেটওয়ার্ক এর বিভিন্ন অংশ নিয়ে পরের ব্লগে আলোচনা করব।

---
<sup><sub> সৈয়দ নাদিম</sub></sup>