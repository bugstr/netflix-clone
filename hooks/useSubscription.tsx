import payments from "@/lib/stripe";
import {
  Subscription,
  onCurrentUserSubscriptionUpdate,
} from "@stripe/firestore-stripe-payments";
import { User } from "firebase/auth";
import { useEffect, useState } from "react";

function useSubscription(user: User | null) {
  const [subscription, setSubscription] = useState<Subscription | null>(null);

  useEffect(() => {
    if (!user) return;

    onCurrentUserSubscriptionUpdate(payments, (snapshot) => {
      setSubscription(
        snapshot.subscriptions.filter(
          //set subscription to true if status is active or trialing
          (subscription) =>
            subscription.status === "active" ||
            subscription.status === "trialing"
        )[0] //access first value of array
      );
    });
  }, []);

  return subscription
}

export default useSubscription;
