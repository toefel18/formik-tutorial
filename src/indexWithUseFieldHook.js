import React from "react";
import ReactDOM from "react-dom";
import {useFormik, useField, Formik, Form} from "formik";
import * as Yup from 'yup';

import "./styles.css";


const TextInput = ({label, ...props}) => {
    const [field, meta] = useField(props)

    return <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input {...field} {...props} />
        {meta.touched && meta.error && <div>{meta.error}</div>}
    </>
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
                <Form>
                    <TextInput
                        label={"First Name"}
                        name={"firstName"}
                        type={"text"}
                        placeholder={"voornaampie"}
                    />
                    <TextInput
                        label={"Last Name"}
                        name={"lastName"}
                        type={"text"}
                        placeholder={"achternaampie"}
                    />
                    <TextInput
                        label={"email"}
                        name={"email"}
                        type={"email"}
                        placeholder={"aa@bb.cc"}
                    />
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
};

function App() {
    return <SignupForm/>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
