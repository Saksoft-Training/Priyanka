# Razorpay Payment Integration Setup Guide

## 🎬 Movies Angel - Payment Gateway Integration

This guide will help you set up Razorpay payment gateway for your movie app.

---

## 📋 Prerequisites

1. **Razorpay Account**: Sign up at [https://razorpay.com/](https://razorpay.com/)
2. **API Keys**: Get your Test/Live API keys from Razorpay Dashboard

---

## 🔧 Setup Instructions

### Step 1: Create Razorpay Account

1. Go to [https://razorpay.com/](https://razorpay.com/)
2. Click on "Sign Up" and create your account
3. Complete the verification process
4. Login to your Razorpay Dashboard

### Step 2: Get API Keys

1. Navigate to **Settings** → **API Keys** in your Razorpay Dashboard
2. Click on **Generate Test Key** (for testing) or **Generate Live Key** (for production)
3. You'll get two keys:
   - **Key ID** (starts with `rzp_test_` for test mode or `rzp_live_` for live mode)
   - **Key Secret** (keep this secret and never expose it in frontend code)

### Step 3: Update Payment Service

Open the file: `src/app/services/payment.service.ts`

Replace the placeholder key with your actual Razorpay Key ID:

```typescript
key: 'rzp_test_YOUR_KEY_ID', // Replace with your actual Key ID
```

**Example:**
```typescript
key: 'rzp_test_1234567890abcd', // Your actual test key
```

### Step 4: Test the Integration

1. Run your Angular app: `npm start`
2. Open browser at `http://localhost:4200/`
3. Click on any movie's **"Buy Now"** button
4. Razorpay payment modal will open

### Step 5: Test Payment Credentials

For **Test Mode**, use these test card details:

**Test Card Numbers:**
- **Success**: `4111 1111 1111 1111`
- **Failure**: `4000 0000 0000 0002`

**Other Details:**
- **CVV**: Any 3 digits (e.g., 123)
- **Expiry**: Any future date (e.g., 12/25)
- **Name**: Any name

**Test UPI ID:**
- **Success**: `success@razorpay`
- **Failure**: `failure@razorpay`

---

## 🎯 Features Implemented

### 1. **Movie Pricing**
- Each movie has a price in INR (₹)
- Prices are displayed on movie cards

### 2. **Buy Now Button**
- Green "Buy Now" button on each movie card
- Shows price on the button
- Disabled after purchase

### 3. **Payment Flow**
1. User clicks "Buy Now" button
2. Razorpay payment modal opens
3. User completes payment
4. On success: Movie is marked as "Purchased"
5. Button changes to "✓ Purchased" (disabled)

### 4. **Purchase Status**
- Movies track `isPurchased` status
- Purchased movies show a disabled "✓ Purchased" button
- Cannot purchase the same movie twice

---

## 📁 Files Modified/Created

### Created Files:
1. `src/app/services/payment.service.ts` - Razorpay payment service
2. `RAZORPAY_SETUP.md` - This setup guide

### Modified Files:
1. `src/app/models/movieVar.ts` - Added `price` and `isPurchased` fields
2. `src/app/services/movie.service.ts` - Added `markAsPurchased()` method
3. `src/app/parent-movie-component/parent-movie-component.ts` - Added payment logic
4. `src/app/parent-movie-component/parent-movie-component.html` - Added Buy button
5. `src/app/parent-movie-component/parent-movie-component.scss` - Added button styles
6. `src/index.html` - Added Razorpay script

---

## 🔒 Security Best Practices

### ⚠️ Important Security Notes:

1. **Never expose Key Secret in frontend code**
   - Only use Key ID in frontend
   - Key Secret should only be used in backend

2. **For Production:**
   - Implement backend order creation
   - Verify payment signature on backend
   - Use webhooks for payment confirmation

3. **Current Implementation:**
   - This is a **frontend-only demo**
   - Suitable for testing and learning
   - For production, you MUST implement backend verification

---

## 🚀 Production Deployment Checklist

Before going live, ensure:

- [ ] Replace test key with live key (`rzp_live_...`)
- [ ] Implement backend order creation API
- [ ] Implement payment verification on backend
- [ ] Set up Razorpay webhooks
- [ ] Add proper error handling
- [ ] Implement payment receipt generation
- [ ] Add transaction logging
- [ ] Test with real payment methods
- [ ] Complete KYC verification on Razorpay

---

## 🎨 UI Features

### Movie Card Display:
- Movie title and year
- Movie thumbnail image
- **Price in ₹** (green, bold)
- **Buy Now button** (green) - Shows price
- **✓ Purchased button** (gray, disabled) - After purchase
- Delete button (red)

### Payment Modal:
- Razorpay branded payment interface
- Multiple payment options (Card, UPI, Netbanking, Wallets)
- Secure payment processing
- Success/Failure callbacks

---

## 🐛 Troubleshooting

### Issue: Razorpay is not defined
**Solution:** Make sure the Razorpay script is loaded in `index.html`:
```html
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
```

### Issue: Payment modal not opening
**Solution:** 
1. Check browser console for errors
2. Verify your Key ID is correct
3. Ensure Razorpay script is loaded

### Issue: Payment always fails
**Solution:** 
1. Use correct test card numbers
2. Check if you're in test mode
3. Verify amount is in paise (multiply by 100)

---

## 📞 Support

- **Razorpay Documentation**: [https://razorpay.com/docs/](https://razorpay.com/docs/)
- **Razorpay Support**: [https://razorpay.com/support/](https://razorpay.com/support/)
- **Integration Guide**: [https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/)

---

## 🎉 Testing Your Integration

1. **Start the app**: `npm start`
2. **Open browser**: `http://localhost:4200/`
3. **Click "Buy Now"** on any movie
4. **Use test credentials** mentioned above
5. **Complete payment**
6. **Verify** button changes to "✓ Purchased"

---

## 💡 Next Steps

To make this production-ready:

1. **Create Backend API** (Node.js/Express, Python/Django, etc.)
2. **Generate Order ID** on backend before payment
3. **Verify Payment Signature** on backend after payment
4. **Store Transaction Data** in database
5. **Implement Webhooks** for payment status updates
6. **Add User Authentication** to track purchases per user
7. **Implement Movie Streaming** for purchased movies

---

## 📝 Sample Backend Implementation (Node.js)

```javascript
// Backend: Create Order
app.post('/create-order', async (req, res) => {
  const { amount, currency, receipt } = req.body;
  
  const options = {
    amount: amount * 100, // amount in paise
    currency: currency,
    receipt: receipt
  };
  
  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Backend: Verify Payment
app.post('/verify-payment', (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  
  const sign = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSign = crypto
    .createHmac("sha256", key_secret)
    .update(sign.toString())
    .digest("hex");
  
  if (razorpay_signature === expectedSign) {
    // Payment is verified
    res.json({ status: 'success' });
  } else {
    res.status(400).json({ status: 'failure' });
  }
});
```

---

**Happy Coding! 🎬💳**