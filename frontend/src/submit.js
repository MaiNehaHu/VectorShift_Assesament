import React from "react";
import { useStore } from './store';

const submitPipeline = async (nodes, edges) => {
  const pipelineData = {
    nodes: nodes.map(node => node.id),
    edges: edges.map(edge => ({ from: edge.source, to: edge.target })),
  };

  try {
    const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pipelineData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    alert(`Number of nodes: ${data.num_nodes}, Number of edges: ${data.num_edges}, Is DAG: ${data.is_dag}`);
  } catch (error) {
    console.error('Error:', error);
    alert('There was an error submitting the pipeline.');
  }
};


export const SubmitButton = () => {
  const { nodes, edges } = useStore(state => ({
    nodes: state.nodes,
    edges: state.edges,
  }));

  const handleSubmit = () => {
    submitPipeline(nodes, edges);
  };

  return (
    <button
      onClick={handleSubmit}
      type="submit"
      className="absolute bottom-0 mb-5 bg-black text-white hover:bg-gray-700 font-semibold rounded-xl px-8 py-3"
    >
      Submit
    </button>
  );
};