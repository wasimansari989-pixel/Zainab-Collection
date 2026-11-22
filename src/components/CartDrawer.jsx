import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle, ArrowRight, Sparkles, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SHOP_INFO } from '../data/products';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) {
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponMessage, setCouponMessage] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = Math.round(subtotal * (discountPercent / 100));
  const total = subtotal - discountAmount;

  const applyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'ZAINAB10') {
      setDiscountPercent(10);
      setCouponMessage('10% Festive Discount Applied!');
    } else {
      setCouponMessage('Invalid coupon. Try "ZAINAB10"');
    }
  };

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    let itemsText = cartItems
      .map(
        (it, idx) =>
          `${idx + 1}. *${it.title}* (${it.selectedSize || 'Standard'}) x ${it.quantity} = ₹${(it.price * it.quantity).toLocaleString('en-IN')}`
      )
      .join('\n');

    let msg = `🛍️ *NEW ORDER FROM ZAINAB COLLECTION WEBSITE*\n\n*Order Items:*\n${itemsText}\n\n*Subtotal:* ₹${subtotal.toLocaleString('en-IN')}\n*Discount:* ₹${discountAmount.toLocaleString('en-IN')}\n*Grand Total:* ₹${total.toLocaleString('en-IN')}\n\n*Store Location:* ${SHOP_INFO.addressShort}\n\nPlease confirm availability and delivery / store pickup timing. Thank you!`;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    window.open(`https://wa.me/${SHOP_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleDirectCheckout = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });
    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
      onClearCart();
      onClose();
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-fade-in">
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-[#FAF5F7]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#F5A3B7]" />
            <h3 className="font-serif font-bold text-lg text-gray-900">Your Shopping Bag</h3>
            <span className="text-xs bg-[#252525] text-white px-2 py-0.5 rounded-full font-bold">
              {cartItems.reduce((acc, it) => acc + it.quantity, 0)}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-200 text-gray-500 hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success Alert if Order Placed */}
        {orderPlaced ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold font-serif text-gray-900">
              Order Received Successfully!
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Thank you for shopping at <strong>Zainab Collection</strong>! Our team will contact you or you can collect your order directly from <strong>Shop No. 2, Rajwada, Indore</strong>.
            </p>
          </div>
        ) : cartItems.length === 0 ? (
          /* Empty Bag State */
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#FAF5F7] text-gray-400 flex items-center justify-center">
              <ShoppingBag className="w-8 h-8 text-[#F5A3B7]" />
            </div>
            <h4 className="text-lg font-bold font-serif text-gray-900">
              Your bag is empty
            </h4>
            <p className="text-xs text-gray-500 max-w-xs">
              Explore our new arrivals and festive suits to find something you love.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 bg-[#252525] text-white rounded-full text-xs font-semibold hover:bg-black transition-colors"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          /* Cart Items List */
          <>
            <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-gray-100">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.selectedSize}`} className="pt-4 first:pt-0 flex gap-4">
                  {/* Thumbnail */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-24 object-cover object-top rounded-xl border border-gray-100"
                  />

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-semibold text-gray-900 line-clamp-1">
                          {item.title}
                        </h4>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.id, item.selectedSize)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <span className="text-[11px] text-gray-500 block mt-0.5">
                        Size: <strong className="text-gray-800">{item.selectedSize || 'Standard'}</strong>
                      </span>

                      <span className="text-xs font-bold text-[#252525] block mt-1">
                        ₹{item.price.toLocaleString('en-IN')}
                      </span>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                          className="p-1 hover:bg-gray-200 transition-colors text-gray-600"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-bold text-gray-800">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 transition-colors text-gray-600"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="text-xs text-gray-400">
                        = ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Checkout Details */}
            <div className="p-5 border-t border-gray-100 bg-white space-y-3.5 shadow-lg">
              
              {/* Coupon Form */}
              <form onSubmit={applyCoupon} className="flex gap-2">
                <input
                  type="text"
                  placeholder='Coupon (Try "ZAINAB10")'
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5 text-xs uppercase font-medium focus:outline-none focus:border-[#F5A3B7]"
                />
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-gray-900 text-white text-xs font-semibold rounded-xl hover:bg-black transition-colors"
                >
                  Apply
                </button>
              </form>
              {couponMessage && (
                <p className={`text-[11px] font-semibold ${discountPercent > 0 ? 'text-green-600' : 'text-red-500'}`}>
                  {couponMessage}
                </p>
              )}

              {/* Subtotal & Discounts */}
              <div className="space-y-1.5 text-xs text-gray-600 pt-1 border-t border-gray-100">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Festive Discount (10%)</span>
                    <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Store Pickup / Shipping</span>
                  <span className="text-green-600 font-semibold">FREE</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-gray-900 pt-1 border-t border-gray-100">
                  <span>Total Amount</span>
                  <span className="text-base text-[#252525]">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order Directly on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleDirectCheckout}
                  className="w-full bg-[#252525] hover:bg-[#111111] text-white py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Checkout / Reserve In-Store</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[10px] text-center text-gray-400">
                Pick up at Rajwada Shop No. 2 or get home delivery across Indore
              </p>
            </div>
          </>
        )}

      </div>
    </div>
  );
}
