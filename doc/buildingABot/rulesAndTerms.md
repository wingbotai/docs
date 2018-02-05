# Rules and terms

## Rules and tips

- **Set low expectations**

  And be ready to deliver more then expected.

- **Don't pretend to be a human**

  It's better, when bot acts like bot - not pretends to be a human.

- **Always lead the dialog**

  There always should be "call to action" in your interaction. Never let user to think long about what to ask bot. You can use **quick replies** as hints.

- **Keep conversation logic simple**

  Simple things works. Not the AI or developers makes your bot smart.

- **Use your visual style**

  User experience will be much better when using media templates.

- **Time is your friend**

  You can always **wait** with your answer.

## Terms

  + **Chat Event** - everything what user does

    * text message
    * menu click
    * handover
    * sent media (image, location, video, ...)
    * button click
    * quick reply click

  + **Reaction** - everything, what bot says

    * text message
    * handover
    * sent media (image, location, video, ...)
    * sent templates (carousel, lists, ...)

  + **Interaction** - reaction to Chat Event

    Each interaction has theese settings:

    * name - *helps identifying interaction in analytics and it's referencing*
    * fallback toggle - *when enabled, all events will pass in*
    * AI samples - *user message samples, which triggers the Interaction*
    * contains a set of Reactions

  + **Quick Reply** - suggested response text

    Quick replies allows user to reply without typing. Quick replies leads the coversation.

  + **Intent** - the action recognised by AI

    When user writes a text message, AI tries to recognise, what intent user has.

  + **AI - the machine learning**

    Tool, which recognises users intent from text. AI learns from AI samples

  + **Conversation Trees** - organised group of Interactions

    Interactions are evaulated in order, they appear in Conversation tree. Conversation trees can be embedded in other conversation trees.

    > **Beware of "circular reverences"**