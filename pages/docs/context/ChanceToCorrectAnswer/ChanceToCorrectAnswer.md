---
title: Chance to correct answer
section: ADVANCED CONVERSATIONS
order: 7
---

# Give user one more chance to correct answer

Sometimes, users give a bot the answer for questions, but bot's NLP do not understand and the response is made by fallback. The user wants to correct the answer, but it's too late. Bot do not understand again. Wingbot provides an easy solution, which will **give one more chance to the user**.
 

![conversation example](./image1.png)

## Let the user make a mistake
We will prepare fallback for these situations by adding one snippet.


1. **Add a snippet** at the top of the fallback interaction (It can be dialog fallback or global fallback in root dialogue).

    ![add fallback](./image_2.png)

2. Select snippet **Keep previous NLP handlers and fallback (just once)** and click to Use snippet.

    ![add message](./image_3.png)


> You can find **more about context snippets** [here](./../HelpersForKeepingUserInContext/snippetsForContext.html).

> Take look **how contexts works** [here](./../keepUserInContext/keepUserInContext.html).