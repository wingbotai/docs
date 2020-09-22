# Building FAQ

sebrat nejčastější dotazy (z e-mailu, od call centra, vyhledávání na webu, podle analytics)
sepsat si knowledge base
rozdělit do kategorií
začít psát konverzace
na začátek každé konverzace dát rozcestník
intenty ke každé interakci (i k rozcestníkům)
možnost přepojit na operátora

1. **Collecting most frequent questions**

First step is to collect the most frequent questions that your customers (users) are asking. Either you can ask your call centre, ask your web analytic or go to Google Analytics and look what are visitors of your website looking for the most.

At the beginning, try to collect around 20 most frequent questions. 

If you have an e-shop it could be the questions about their orders (order didn’t arrive, how can one make a complaint, how to return an order, etc.).

If you are building a bot for your HR department it could be the questions about how to apply for a job, what are the conditions of admissions, where applicant can submit the application, etc.

2. **Building the knowledge base**

When you have enough questions, now it’s time to build your knowledge base. We recommend to build a Google Sheet where you can write all your questions. Than try to figure out the answers. Either by yourself or find help in your company. Try to be as brief as possible but without losing key informations. Every answer should be in a form of a small paragraph.

3. **Sorting into categories**

If you have multiple questions try to sort them out into 3-4 main categories. Try to think as a user that might use your chatbot. What are the most probable categories user can ask? Are they distinguished enough to have their own separate category? Will user know where he can go next?

Separate your categories into several dialogues in Designer. Every category should have its own dialogue.

4. **Building a root menu**

Now as you have figured out your categories, it is time to start to design your bot. Give your categories specific name which you can use as a tag on your quick replies buttons.

5. **Building dialogues**

Now it is time to design your conversation. Use your knowledge base as a source.

6. **Adding intents to quick replies and to every interaction**

We strongly recommend using NLP that potential users can use your chatbot not only with quick replies but also with written language. So add suitable intents to your conversation. Either specific intents for every interaction either for confirming a choice of a user.

7. **Possibility to interact with human**

There are cases when user wants to speak to a human operator - his demand is specific - or he just don’t like to talk to chatbot. You should provide this possibility to a user if possible.

* Rozsekáváme dlouhé FAQ do podkonverzaci