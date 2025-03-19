// import React from 'react';
// import { plansData } from '../data/plansData';
// import whiteTick from '../assets/whiteTick.png';

// const Plans = () => {
//   return (
  // 
//     <div className="relative bg-gray-700 text-white py-16 px-8">
      
//       {/* Blur Effects */}
//       <div className="absolute w-80 h-80 bg-orange-400 opacity-30 rounded-full blur-3xl top-16 left-8"></div>
//       <div className="absolute w-80 h-80 bg-blue-500 opacity-30 rounded-full blur-3xl bottom-16 right-8"></div>

//       {/* Header */}
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold uppercase">
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
//             Ready to start
//           </span>
//         </h2>
//         <h2 className="text-4xl font-bold uppercase">Your journey</h2>
//         <h2 className="text-4xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
//           now with us
//         </h2>
//       </div>

//       {/* Plans */}
//       <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
//         {plansData.map((plan, index) => (
//           <div 
//             key={index} 
//             className="bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform"
//           >
            
//             {/* Icon */}
//             <div className="text-5xl mb-4">{plan.icon}</div>
            
//             {/* Plan Name and Price */}
//             <h3 className="text-2xl font-semibold">{plan.name}</h3>
//             <p className="text-lg text-gray-400">${plan.price}</p>

//             {/* Features */}
//             <div className="mt-4 space-y-3">
//               {plan.features.map((feature, i) => (
//                 <div key={i} className="flex items-center gap-2">
//                   <img src={whiteTick} alt="Tick" className="w-5 h-5" />
//                   <span>{feature}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Benefits and CTA */}
//             <div className="mt-4">
//               <span className="text-orange-400 cursor-pointer hover:underline">
//                 See more benefits →
//               </span>
//             </div>

//             <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-lg transition">
//               Join now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Plans;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlans, updatePlan, deletePlan } from '../redux/plansSlice';
import whiteTick from '../assets/whiteTick.png';

const Plans = () => {
  const dispatch = useDispatch();
  const { plans } = useSelector((state) => state.plans);

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [planToDelete, setPlanToDelete] = useState(null);

  useEffect(() => {
    dispatch(fetchPlans());
  }, [dispatch]);

  const handleOpenUpdate = (plan) => {
    setSelectedPlan(plan);
    setIsUpdateOpen(true);
  };

  const handleOpenDelete = (plan) => {
    setPlanToDelete(plan);
    setIsDeleteOpen(true);
  };

  const handleUpdate = () => {
    if (selectedPlan) {
      dispatch(updatePlan({
        id: selectedPlan._id,
        name: selectedPlan.name,
        price: selectedPlan.price
      }));
      setIsUpdateOpen(false);
    }
  };

  const handleConfirmDelete = () => {
    if (planToDelete) {
      dispatch(deletePlan(planToDelete._id));
      setIsDeleteOpen(false);
    }
  };

  return (
    <div className="relative bg-gray-700 text-white py-16 px-8">

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold uppercase">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Plans Management
          </span>
        </h2>
      </div>

      {/* Plans */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {plans.map((plan) => (
          <div
            key={plan._id}
            className="bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform"
          >
            <h3 className="text-2xl font-semibold">{plan.name}</h3>
            <p className="text-lg text-gray-400">${plan.price}</p>

            {/* Features */}
            <div className="mt-4 space-y-3">
              {plan.features?.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <img src={whiteTick} alt="Tick" className="w-5 h-5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => handleOpenUpdate(plan)}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
              >
                Update
              </button>

              <button
                onClick={() => handleOpenDelete(plan)}
                className={`bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md ${
                  plans.length === 1 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={plans.length === 1}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Update Dialog */}
      {isUpdateOpen && selectedPlan && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Update Plan</h2>

            <input
              type="text"
              placeholder="Plan Name"
              value={selectedPlan.name}
              onChange={(e) => setSelectedPlan({ ...selectedPlan, name: e.target.value })}
              className="w-full p-2 border rounded mb-2 text-black"
            />
            <input
              type="number"
              placeholder="Price"
              value={selectedPlan.price}
              onChange={(e) => setSelectedPlan({ ...selectedPlan, price: e.target.value })}
              className="w-full p-2 border rounded mb-4 text-black"
            />

            <div className="flex justify-end">
              <button
                onClick={() => setIsUpdateOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      {isDeleteOpen && planToDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Confirm Deletion</h2>
            <p className="text-gray-700">Are you sure you want to delete <strong>{planToDelete.name}</strong>?</p>

            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsDeleteOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Plans;
