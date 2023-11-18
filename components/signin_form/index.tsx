"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import type { FormEventHandler } from "react";
import styles from './page.module.scss'

const SignInForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    if (res && !res.error) {
      router.push("/profile");
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 400); 

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className={`${styles.form} ${isVisible ? styles.visible : ''}`}>
      <form onSubmit={handleSubmit} className={styles.form_wrap}>
        <input className={styles.form_input} type="email" name="email" required></input>
        <input className={styles.form_input} type="password" name="password" required></input>
        <button className={styles.form_button} type="submit">Войти</button>
      </form>
    </div>
  );
};

export default SignInForm;
