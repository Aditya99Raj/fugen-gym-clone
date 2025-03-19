import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatePlan } from '../redux/plansSlice';

const UpdatePlanDialog = ({ open, onClose, plan }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(plan?.name || '');
  const [price, setPrice] = useState(plan?.price || '');

  const handleSubmit = () => {
    dispatch(updatePlan({ id: plan._id, name, price }));
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Update Plan</h2>
        <input
          type="text"
          placeholder="Plan Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePlanDialog;
