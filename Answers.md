1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

      forEach, filter, map

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

      Actions are CRUD operations.
      Reducers are just functions that take in actions and data and return a copy of new data.
      Store is the app storage of the data in state. It is the single source of truth in a Redux app because all components can access it directly without using inheritance. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is global to the app, where as Component State is local to the component. 

1.  What is middleware?
    Middleware is like the gate of a castle that allows approved actions to flow through the app.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  Thunk is a middleware that allows for asynchronous functions in Redux. You can call action creators to return a function instead of an object.

1.  Which `react-redux` method links up our `components` with our `redux store`?

    connect
