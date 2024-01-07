import React from 'react'

const Orders = () => {
  const orders = [
    { id: 1, product: 'Product A', quantity: 2, price: 30 },
    { id: 2, product: 'Product B', quantity: 1, price: 25 },
    { id: 3, product: 'Product C', quantity: 3, price: 15 },
  ];
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>
      
      {orders.length === 0 ? (
        <p className="text-gray-600">No orders available.</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map(order => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{order.product}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{order.quantity}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">${order.price}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

{/* <div className='w-full h-auto flex items-center justify-center'>

      <button type='' className='w-auto px-8 bg-red-700 rounded-xl text-white py-2'>CheckOut</button>
</div> */}
    </div>
  )
}

export default Orders