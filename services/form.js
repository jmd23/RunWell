import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../util/firebase.ts";

export const sendContactForm = async ({ name, email, comment }) => {
  try {

    const test = db
    const ref = collection(db, "contact");
    await addDoc(ref, {
      name,
      email,
      comment,
      sentAt: Timestamp.now().toDate(),
    });
    return 0;
  } catch (err) {
    console.log(err)
    return -1;
  }
};