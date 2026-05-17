Reflection Questions

1. Why is context useful?
Context is useful because it allows sharing state (like the counter value) across multiple components without passing props manually at every level.

2. How is it different from local state?
Local state is only available inside one component, while context provides global state that can be accessed by any component wrapped in the provider.

3. What would prop drilling look like here?
Prop drilling would mean passing count, increment, and decrement from App → CounterDisplay/CounterControls through intermediate components even if they don’t use them.