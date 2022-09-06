# Service Interactions in Chatbot

Service interactions are for example handling not recognized intent or as starting interactions of conversation.

## Handling direct traffic

Some users came directly to your page on facebook and they can start conversation with "your page". After this they will start conversation at base interaction. This interaction is first interaction in the root block. Just edit this interaction - say hello to visitor and let them go to dialogues :) 

This interaction should have 1 text message, quick replies and intent handlers. So user can start chat easily.

## Handling unrecognized text messages

User can type some text the bot is not ready. It can be some specific intent or for example message with mistakes in it. Don't worry, we will handle them.

Chatbots are not perfect. They sometimes don't understand to user. User can type intent, which chatbot can not recognise. Or user is just trolling chatbot. For this cases exists **fallback** interaction. The purpose is to catch user again and send him to the right direction (dialogue). 

Wingbot team recommendation: Use this interaction like signpost. You can show user all options. And can send user message: "Would you like to ask about something?" and add more alternatives of text (for this use arrow at the right side of text input). It's a good idea to let the chatbot pick the message.

