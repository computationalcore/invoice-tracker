window.deprecationWorkflow = window.deprecationWorkflow || {};
window.deprecationWorkflow.config = {
  workflow: [
    { handler: "silence", matchMessage: "/Using `mouseEnter` event handler methods in components has been deprecated/" },
  ]
};
