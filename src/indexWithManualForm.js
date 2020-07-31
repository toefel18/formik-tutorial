import React from "react";
import ReactDOM from "react-dom";
import {useFormik} from "formik";
import * as Yup from 'yup';

import "./styles.css";

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            firstName: "",
            lastName: ""
        },
        // validate,  <<- if you do not want to use Yup
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, 'must be 15 chars or less').required("Required"),
            lastName: Yup.string().max(10, 'must be 10 chars or less').required("Required"),
            email: Yup.string().email("Must be a valid email").required("Required")
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First name</label>
            <input
                id="firstName"
                type="text"
                {...formik.getFieldProps("firstName")}
                // name="firstName"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.firstName}
            />
            {formik.errors.firstName && formik.touched.firstName && <div>{formik.errors.firstName}</div>}
            <label htmlFor="lastName">last name</label>
            <input
                id="lastName"
                type="text"
                {...formik.getFieldProps("lastName")}
                // name="lastName"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.lastName}
            />
            {formik.errors.lastName && formik.touched.lastName && <div>{formik.errors.lastName}</div>}

            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                type="email"
                {...formik.getFieldProps("email")}
                // name="email"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email && <div>{formik.errors.email}</div>}

            <button type="submit">Submit</button>
        </form>
    );
};

function App() {
    return <SignupForm/>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
