import React, { useState, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { useForm } from "react-hook-form";
import "./styles/form.css";



const CustomForm = ({ status, message, onValidated }) => {

    	const url ="https://gmail.us18.list-manage.com/subscribe/post?u=e9ce3401f062aa032357227a9&id=f2eef6e434";


         const {
						register,
						formState: { errors },
						handleSubmit,
					} = useForm();

					// const onValidated = (formData) => console.log(formData);

	return (
    <form className="mc__form" onSubmit={handleSubmit(onValidated)}>
      <h3 className="mc__title">
        {status === "success" && (
          <div style={{ color: "green" }}>Subscribed !</div>
        )}
      </h3>

      {status === "sending" && (
        <div className="mc__alert mc__alert sending">sending...</div>
      )}
      {status === "error" && (
        <div
          className="mc__alert mc__alert error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="mc__alert mc__alert success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      {status !== "success" ? (
        <div className="mc__field-container">
          <input
            placeholder="Your Email"
            type="Email"
            autocapitalize="off"
            autocorrect="off"
            name="EMAIL"
            id="EMAIL"
            {...register("mail", {
              required: "Email Address is required",
            })}
          />
          <p className="error">{errors.mail?.message}</p>
        </div>
      ) : null}

      {/*Close button appears if form was successfully sent*/}
      {status === "success" ? (
        "rex"
      ) : (
        // <PrimaryCTAButton
        // 	handleClick={() => setModalOpen(false)}
        // 	label="close"
        // 	size="big"
        // 	customClass="g__justify-self-center"
        // />
        // "sharon"
        <input type="submit" />

        // <InputField
        // 	label="subscribe"
        // 	type="submit"
        // 	formValues={[email, firstName, lastName]}
        // />
      )}
    </form>
  );
};

const MailchimpForm = (props) => {
		const url =
      "https://gmail.us18.list-manage.com/subscribe/post?u=e9ce3401f062aa032357227a9&id=f2eef6e434";
	// https://gmail.us18.list-manage.com/subscribe?u=e9ce3401f062aa032357227a9&id=f2eef6e434

	
	return (
		<div className="mc__form-container">
			<MailchimpSubscribe
				url={url}
				render={({ subscribe, status, message }) => (
					<CustomForm
						status={status}
						message={message}
						onValidated={(formData) => subscribe(formData)}
					/>
				)}
			/>
		</div>
	);
};

export default MailchimpForm;
