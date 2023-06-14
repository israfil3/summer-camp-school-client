import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import '../css/pament.css'
import { useContext, useEffect, useState } from "react";
import AdminInfo from "../../adminInfo/AdminInfo";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";


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
        setCardError(error.message)
      }
       else {
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

        setLoading(false)
        if(paymentIntent.status === 'succeeded'){
            setTransactionId( paymentIntent.id)
            const payment = {
                email: user?.email,
                name: user?.displayName,
                instrName: items.instructor_name,
                className:items.class_name,
                img:items.img,
                site:items.available_seats,
                transactionId: paymentIntent.id,
                price,
                cartItems:items._id,
            }
            axiosSecure.post('/payments', payment)
            .then(res => {
                if(res.data.insertedId){
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your Payment Done',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }
            })
         }

    };
  
    return (
     <>
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
          
     </>
    );
  };

  export default CheckoutForm