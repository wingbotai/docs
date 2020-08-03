# Basic slot filling

This feature helps you easily get needed information from users. One way to get information is to ask the user little by little. The second way is that the user can type the information at once. All you need to do is have **information in the entity** and you can solve both situations easily.

**Example 1: Directly to interaction Big trees**

![conversation direct](./image_1.png)

**Example 1: Ask for information about size**

![conversation with question](./image_2.png)

## Slot filling with one parameter

1. **Create an entity** with information.

![entity](./image_3.png)

2. **Create intent linked to the entity**.

![intent](./image_4.png)

3. **Prepare interactions**: create interactions for small/middle/big tree offers.. 

![prepare interactions](./image_5.png)

4. **Add intent to interactions**.

![add intent](./image_6.png)

5. **Add entity to interactions**.

![add entity](./image_7.png)

6. **Set value of entity** (depends on the size of trees in interaction).

![value of entity](./image_8.png)

7. **Create interaction** which do not get the size of a tree. small/middle/big tree offers. 

![general interaction](./image_9.png)

8. **Add intent and entity to interaction**.

![add intent and entity](./image_10.png)

9. **Set value of entity to optional**.

![optional entity](./image_11.png)

10. **Add also handlers for responses.**.

![handlers for entity](./image_12.png)

### Diagram of result

![handlers for entity](./image_13.png)