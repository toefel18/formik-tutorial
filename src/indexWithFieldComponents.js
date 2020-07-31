import React from "react";
import ReactDOM from "react-dom";
import {ErrorMessage, Field, FieldArray, Formik, useFormik} from "formik";
import * as Yup from 'yup';

import "./styles.css";

function validateUsername(value) {
    let error;
    if (value === 'admin') {
        error = 'Nice try!';
    }
    return error;

}

const SignupForm = () => {
    return (
        <Formik
            initialValues={{
                email: "",
                firstName: "",
                lastName: ""
            }}
            validationSchema={Yup.object({
                firstName: Yup.string().max(15, 'must be 15 chars or less').required("Required"),
                lastName: Yup.string().max(10, 'must be 10 chars or less').required("Required"),
                email: Yup.string().email("Must be a valid email").required("Required")
            })}
            onSubmit={(values, {setSubmitting}) => {
                alert(JSON.stringify(values, null, 2));
            }}
        >
            {formik => (
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="firstName">First name</label>
                    <Field name="firstName" type="text" validate={validateUsername}/>
                    <ErrorMessage name="firstName"/>

                    <label htmlFor="lastName">last name</label>
                    <Field name="lastName" type="text"/>
                    <ErrorMessage name="lastName"/>

                    <label htmlFor="email">Email Address</label>
                    <Field name="email" type="email"/>
                    <ErrorMessage name="email"/>

                    <button type="submit">Submit</button>
                </form>
            )}
        </Formik>
    );
};

function App() {
    return <SignupForm/>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
