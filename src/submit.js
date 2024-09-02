import { useStore } from './store';
import Swal from 'sweetalert2';

export const SubmitButton = () => {
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }));

  const handleSubmit = async () => {
    try {
      console.log(nodes);
      console.log(JSON.stringify({ nodes, edges }));

      const response = await fetch('https://ycombinat-1.onrender.com/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nodes, edges }),
      });

      const data = await response.json();
      console.log('Response from backend:', data);

      Swal.fire({
        title: 'Pipeline Submitted!',
        text: `Nodes: ${data.num_nodes}, Edges: ${data.num_edges}, Is DAG: ${data.is_dag}`,
        icon: 'success',
        confirmButtonText: 'OK',
      });
    } catch (error) {
      console.error('Error submitting the pipeline:', error);

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to submit pipeline',
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <div className="flex items-center justify-center mt-6">
      <button
        type="button"
        onClick={handleSubmit}
        className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-200 ease-in-out"
      >
        Submit
      </button>
    </div>
  );
};
