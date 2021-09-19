//issue 192
App.js;
import React from "react";
import { useForm } from "react-hook-form";

import saveData from "./some_other_file";

export default function Form() {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => saveData(data))}>
      <h1>New Expense</h1>
      <label>Name</label>
      <input name="name" ref={register} />
      <label>Description</label>
      <textarea
        name="Description"
        id="Description"
        cols="30"
        rows="10"
        ref={register}
      ></textarea>
    </form>
  );
}

export default app;

//kihuni