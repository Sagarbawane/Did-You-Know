import axios from "../config/axios";
import Swal from "sweetalert2";

export const Comment = (comment) => {
  return { type: "ADD_COMMENT", payload: comment };
};

export const startGetComment = () => {
  return (dispatch) => {
    axios
      .get("/comment", {
        headers: {
          auth: localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        const comment = response.data;
        dispatch(Comment(comment));
      })
      .catch((err) => {
        alert(err);
      });
  };
};
export const StartAddComment = (formData) => {
  console.log(formData);
  return (dispatch) => {
    axios
      .post("/comment", formData, {
        headers: {
          auth: localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.hasOwnProperty("errors")) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "comment size is small",
          });
        } else {
          Swal.fire({
            title: "Are you sure?",

            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "ADD!",
          }).then((result) => {
            if (result.isConfirmed) {
              const comment = response.data;
              dispatch(Comment(comment));
              Swal.fire("Added!", "The comment has been added.", "success");
            } else {
              Swal.fire(
                "Cancelled",
                "The comment has not been added.",
                "error"
              );
            }
          });
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
};
export const RemoveComment = (_id) => {
  return { type: "REMOVE_COMMENT", payload: _id };
};

export const startRemoveComment = (id) => {
  return (dispatch) => {
    axios
      .delete(`/comment/${id}`, {
        headers: {
          auth: localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        if (response.data.hasOwnProperty("errors")) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.data.errors,
          });
        } else {
          Swal.fire({
            title: "Are you sure?",

            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "REMOVE!",
          }).then((result) => {
            if (result.isConfirmed) {
              const removeComment = response.data;
              dispatch(RemoveComment(removeComment._id));
              Swal.fire("Remove!", "The comment has been removed.", "success");
            } else {
              Swal.fire(
                "Cancelled",
                "The comment has not been removed.",
                "error"
              );
            }
          });
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
};
