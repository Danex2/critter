import React from "react";
import Form from "./Form";
import FormInput from "./FormInput";
import Container from "./Container";
import Button from "./Button";
import useForm from "react-hook-form";
import axios from "axios";
import { getToken } from "../utils/getToken";

const MyAccount = () => {
  const [accountInfo, setAccountInfo] = React.useState({});
  const [message, setMessage] = React.useState(null);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const { address, email, info, phone } = data;
    axios
      .put(
        "/pet",
        {
          address,
          info,
          email,
          phone,
        },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      )
      .then((response) => {
        setMessage(response.data.message);
      });
  };
  React.useEffect(() => {
    axios
      .get("/mypet", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((data) => setAccountInfo(data.data));
  }, []);
  const deletePost = () => {
    axios
      .delete("/pet", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((response) => {
        setMessage(response.data.message);
        setAccountInfo((prevState) => ({
          ...prevState,
          data: null,
        }));
      });
  };
  return (
    <Container>
      {accountInfo?.data === null ? (
        <p>You have no active ads.</p>
      ) : (
        <Form submit={handleSubmit(onSubmit)}>
          <h2 className="text-center mb-3 font-semibold text-blue-900 text-xl">
            Update Pet Ad
          </h2>
          {message && (
            <p className="bg-green-300 p-3 rounded text-center text-green-800 border border-green-500 mb-3">
              {message}
            </p>
          )}
          <FormInput
            name="address"
            label="Address"
            type="text"
            inputRef={register}
            value={accountInfo.data?.address}
          />
          <label htmlFor="Additional Info">
            Additional Info
            <textarea
              className="rounded px-3 py-2 w-64 sm:w-full mb-3 focus:outline-none border-blue-300 border"
              rows="4"
              style={{ resize: "none" }}
              name="info"
              defaultValue={accountInfo.data?.additionalInfo}
              ref={register}
            ></textarea>
          </label>
          <FormInput
            name="email"
            label="E-mail"
            type="text"
            inputRef={register}
            value={accountInfo?.data?.postedBy?.contactInfo?.email}
          />
          <FormInput
            name="phone"
            label="Phone Number"
            type="text"
            inputRef={register}
            value={accountInfo?.data?.postedBy?.contactInfo?.phone}
          />
          <Button type="submit" name="Update" />
          <Button type="button" name="Delete" onClick={deletePost} />
        </Form>
      )}
    </Container>
  );
};

export default MyAccount;
