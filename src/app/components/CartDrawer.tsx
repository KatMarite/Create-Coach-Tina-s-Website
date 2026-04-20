"use client";

import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function CartDrawer() {
  const { items, isCartOpen, toggleCart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [checkoutStep, setCheckoutStep] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic implementation for Payfast checkout integration
    // USING SANDBOX CREDENTIALS FOR TESTING.
    const merchantId = '10000100'; 
    const merchantKey = '46f0cd694581a';
    
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://sandbox.payfast.co.za/eng/process'; // Change to www.payfast.co.za for production
    
    // Construct the item names based on cart items
    const itemNames = items.map(item => `${item.title} (x${item.quantity})`).join(', ');

    const fields = {
      merchant_id: merchantId,
      merchant_key: merchantKey,
      return_url: window.location.origin, 
      cancel_url: window.location.origin,
      amount: cartTotal.toFixed(2),
      item_name: itemNames.length > 250 ? 'Coach Tina Cart Purchase' : itemNames,
      name_first: formData.firstName,
      name_last: formData.lastName,
      email_address: formData.email,
      cell_number: formData.phone,
      // Pass the address via a custom string to ensure the merchant receives it
      custom_str1: `Shipping: ${formData.address}, ${formData.city}, ${formData.postalCode}`
    };

    Object.entries(fields).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value.toString();
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
  };

  // Reset checkout step when cart is closed or emptied
  React.useEffect(() => {
    if (!isCartOpen || items.length === 0) {
      setCheckoutStep(false);
    }
  }, [isCartOpen, items.length]);

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity" 
        onClick={toggleCart}
      />
      
      <div className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white shadow-2xl z-[70] transform transition-transform flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          {checkoutStep ? (
            <button 
              onClick={() => setCheckoutStep(false)}
              className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Cart</span>
            </button>
          ) : (
            <h2 className="font-serif text-2xl flex items-center gap-2" style={{ color: 'var(--charcoal)' }}>
              <ShoppingBag className="w-6 h-6" />
              Your Cart
            </h2>
          )}
          <button 
            onClick={toggleCart}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" style={{ color: 'var(--charcoal)' }} />
          </button>
        </div>

        {/* Content */}
        {!checkoutStep ? (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-gray-400" />
                  </div>
                  <div style={{ color: 'var(--charcoal)' }}>
                    <p className="font-medium text-lg">Your cart is empty</p>
                    <p className="text-sm font-light mt-1">Looks like you haven't added any books yet.</p>
                  </div>
                  <button 
                    onClick={toggleCart}
                    className="mt-4 px-6 py-2 rounded-lg font-medium transition-colors"
                    style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-20 h-28 object-cover rounded shadow-sm"
                    />
                    <div className="flex-1 flex flex-col">
                      <h3 className="font-medium text-sm line-clamp-2" style={{ color: 'var(--charcoal)' }}>
                        {item.title}
                      </h3>
                      <p className="text-sm mt-1" style={{ color: 'var(--sage-green)' }}>
                        {item.price}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center hover:bg-white rounded transition-colors"
                          >
                            -
                          </button>
                          <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center hover:bg-white rounded transition-colors"
                          >
                            +
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium" style={{ color: 'var(--charcoal)' }}>Subtotal</span>
                  <span className="font-serif text-xl" style={{ color: 'var(--sage-green)' }}>
                    R{cartTotal.toFixed(2)}
                  </span>
                </div>
                <button 
                  onClick={() => setCheckoutStep(true)}
                  className="w-full py-4 rounded-lg font-medium text-white transition-all hover:shadow-lg hover:scale-[1.02]"
                  style={{ backgroundColor: 'var(--charcoal)' }}
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="flex-1 overflow-y-auto flex flex-col">
            <form onSubmit={handleCheckout} className="flex-1 flex flex-col">
              <div className="p-6 space-y-4 flex-1">
                <h3 className="font-serif text-xl mb-4" style={{ color: 'var(--charcoal)' }}>Shipping Details</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">First Name</label>
                    <input required type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:border-gray-500" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                    <input required type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:border-gray-500" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:border-gray-500" />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:border-gray-500" />
                </div>

                <div className="space-y-1 mt-6">
                  <label className="text-sm font-medium text-gray-700">Street Address</label>
                  <input required type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:border-gray-500" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">City</label>
                    <input required type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:border-gray-500" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">Postal Code</label>
                    <input required type="text" name="postalCode" value={formData.postalCode} onChange={handleInputChange} className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:border-gray-500" />
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium" style={{ color: 'var(--charcoal)' }}>Total to Pay</span>
                  <span className="font-serif text-xl" style={{ color: 'var(--sage-green)' }}>
                    R{cartTotal.toFixed(2)}
                  </span>
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 rounded-lg font-medium text-white transition-all hover:shadow-lg hover:scale-[1.02]"
                  style={{ backgroundColor: 'var(--sage-green)' }}
                >
                  Pay with Payfast
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
