import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { API } from "./global";

const emailvalidationSchema = Yup.object({
  subject: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  body: Yup.string()
    .min(2, "Too Short!")
    .max(500, "Too Long!")
    .required("Required"),
});

function App() {
  const sendMail = (newEmail) => {
    fetch(`${API}/user/sendmail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmail),
    });
  };

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        recipients: "",
        subject: "",
        body: "",
      },
      validationSchema: emailvalidationSchema,
      onSubmit: (newEmail) => {
        console.log("onSubmit", newEmail);
        sendMail(newEmail);
        toast.success("🦄 Email send Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "dark",
        });
      },
    });

  return (
    <>
      <Container>
        <div className="App">
          <div className="box">
            <h2>Bulk Email </h2>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>To</Form.Label>
                <Form.Control
                  type="text"
                  name="recipients"
                  placeholder="recipients "
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.recipients}
                  error={touched.recipients && Boolean(errors.recipients)}
                  helperText={
                    touched.recipients && errors.recipients
                      ? errors.recipients
                      : " "
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  placeholder="Enter subject "
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.subject}
                  error={touched.subject && Boolean(errors.subject)}
                  helperText={
                    touched.subject && errors.subject ? errors.subject : " "
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Body</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  name="body"
                  placeholder="Enter message...."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.body}
                  error={touched.body && Boolean(errors.body)}
                  helperText={touched.body && errors.body ? errors.body : " "}
                />
              </Form.Group>

              <Button type="submit">Submit</Button>
            </Form>
          </div>
        </div>
      </Container>
      <ToastContainer />
    </>
  );
}

export default App;
