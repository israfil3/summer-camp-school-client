import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import '../css/pament.css'
import { useContext, useEffect, useState } from "react";
import AdminInfo from "../../adminInfo/AdminInfo";
import { AuthContext } from "../../provider/AuthProvider";
import { flushSync } from "react-dom";

const CheckoutForm = ({price,items}) => {
    const [axiosSecure] = AdminInfo();
    const stripe = useStripe();
    const elements = useElements();
    const [cardError,setCardError] = useState('');
    const {user} = useContext(AuthContext)
    const [clientSecret, setClientSecret] = useState("");
    const [loading,setLoading] = useState(false);
    const [transactionId,setTransactionId] = useState()

    useEffect(()=>{
        axiosSecure.post('/create-payment-intent',{price})
        .then(res => {
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
    },[price,axiosSecure])
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (!stripe || !elements) {
        return;
      }

      const card = elements.getElement(CardElement);
  
      if (card == null) {
        return;
      }
  
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
        setCardError(error.message)
      }
       else {
        console.log('[PaymentMethod]', paymentMethod);
        setCardError('')
      }

      setLoading(true)
      const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
       clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: user?.displayName || 'unknown',
              email: user?.email || 'unknown'
            },
          },
        },
      );
        if(confirmError){
            setCardError(confirmError)
        }
        console.log(paymentIntent)

        setLoading(false)
        if(paymentIntent.status === 'succeeded'){
            setTransactionId( paymentIntent.id)
            const transactionId = paymentIntent.id;
            const payment = {
                email: user?.email,
                name: user?.displayName,
                transactionId: paymentIntent.id,
                price,
                cartItems:items._id,
                classItems:items.cartId,
            }
            axiosSecure.post('/payments', payment)
            .then(res => {
                console.log(res.data)
            })
         }

    };
  
    return (
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" disabled={!stripe || !clientSecret || loading}>
          Pay
        </button>
      </form>
    );
  };

  export default CheckoutForm