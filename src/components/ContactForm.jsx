import { useState } from 'react';

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");

    const [result, setResult] = useState("Send");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();

        let hasError = false;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        setNameError("");
        setEmailError("");
        setMessageError("");

        if (!name.trim()) {
            setNameError("This field is required.");
            hasError = true;
        }

        if (!email.trim()) {
            setEmailError("This field is required.");
            hasError = true;
        } else if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email.");
            hasError = true;
        }

        if (!message.trim()) {
            setMessageError("This field is required.");
            hasError = true;
        }

        if (hasError || isSubmitting) {
            return;
        }

        const formData = new FormData(event.target);

        setIsSubmitting(true);
        setResult("Sending...");

        try {
            formData.append("access_key", "068462ad-b637-481c-8a2d-9a1d690bd62c");

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Sent!");
                
                setName("");
                setEmail("");
                setMessage("");
            }
            else {
                setResult("Error Sending. Please try again.");
            }
        }
        finally {
            setTimeout(() => {
                setResult("Send");
                setIsSubmitting(false);
            }, 3000);
        }
    };

  return (
    <form onSubmit={onSubmit} className="contact-form">
        <div className="input-container">
            <div className="subtitle">
                Name
            </div>

            <input className="input body"
                name="name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <div className="error">
                {nameError}
            </div>
        </div>
        <div className="input-container">
            <div className="subtitle">
                Email
            </div>

            <input className="input body"
                name="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <div className="error">
                {emailError}
            </div>
        </div>
        <div className="input-container">
            <div className="subtitle">
                Message
            </div>

            <textarea className="input message body"
                name="message"
                autoComplete="off"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <div className="error">
                {messageError}
            </div>
        </div>

        <button className="button subtitle" type="submit">
            {result}
        </button>
    </form>
  );
}