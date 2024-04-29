Here is a react version 18 simple exercise project example of how to add task and task create, task edit conditionally button save and task delete with raw state logic. Means that here data pass through props and handle state logic with useState.

No use reducer pattern and any state management library like Redux, Recoil, Mobx, Zustand etc.

As your components grow in complexity, it can get harder to see at a glance all the different ways in which a component’s state gets updated. For example, the TaskApp component below holds an array of tasks in state and uses three different event handlers to add, remove, and edit tasks.

Each of its event handlers calls setTasks in order to update the state. As this component grows, so does the amount of state logic sprinkled throughout it. To reduce this complexity and keep all your logic in $${\color{red}one \space easy-to-access\space place}$$, you can move that state logic into a single function outside component, called a reducer.

But according to practice I upload another same work with reducer and state management library Redux will soon and check my another repository.
