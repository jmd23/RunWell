import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link';

import React, { useState, useRef } from "react";
import { sendContactForm } from "../services/form.js"

const Contact = () => {
  const [message, setMessage] = useState("");
  const formRef = useRef();
  const submitContact = async (e) => {

    e.preventDefault();

    const res = await sendContactForm({
      name: e.target[0].value,
      email: e.target[1].value,
      comment: e.target[2].value,
    });
    if (res == 0) {
      setMessage("Thank you for your valuable comment!");
      formRef.current.reset();
    } else {
      setMessage("Something went wrong! Please try again");
    }
  };

  return (

    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Create navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navbarLinks}>
          <Link href="/">Home</Link>
          <Link href="/record">Record</Link>
          <Link href="/plan">Training Plans</Link>
          <Link href="/map">Mapping</Link>
        </div>
      </nav>

      <div className="container max-w-2xl text-center">
        <h1>
          {"Contact Us"}
        </h1>
        <div>
          <div>
            {message}
            <span
              onClick={() => setMessage("")}
            >
              &times;
            </span>
          </div>
          <form
            ref={formRef}
            onSubmit={submitContact}
          >
            <input
              required
              placeholder="Name*"
              type={"text"}
              minLength={3}
              maxLength={25}
            />
            <input
              required
              placeholder="Email Address*"
              type={"email"}
            />
            <textarea
              required
              placeholder="Comment*"
              rows={5}
            ></textarea>
            <button type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;