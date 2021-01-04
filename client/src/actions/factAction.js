//import axios from "axios";
import axios from "../config/axios";
import Swal from "sweetalert2";

export const Fact = (technicalFact) => {
  return { type: "ADD_FACT", payload: technicalFact };
};

export const startGetFact = () => {
  console.log(localStorage.getItem("authToken"));
  return (dispatch) => {
    axios
      .get("/fact", {
        headers: {
          auth: localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        const technicalFact = response.data;
        dispatch(Fact(technicalFact));
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: { err: "invalid Info" },
        });
      });
  };
};
export const startGetAddFact = (formData) => {
  console.log(formData);
  return (dispatch) => {
    axios
      .post("/fact", formData, {
        headers: {
          auth: localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        console.log("data", response.data);
        if (response.data.hasOwnProperty("errors")) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.data.errors,
          });
        } else {
          if (response) {
            console.log(response);
            Swal.fire({
              title: "Are you sure?",
              icon: "success",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "ADD!",
            }).then((result) => {
              console.log(result);
              if (result.isConfirmed) {
                Swal.fire("Added!", "The task has been added.", "success");
                const technicalFact = response.data;
                dispatch(Fact(technicalFact));
              } else {
                Swal.fire(
                  "Cancelled",
                  "The task has been not been added.",
                  "error"
                );
              }
            });
          }
        }
      })

      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err,
        });
      });
  };
};
export const FactRemove = (_id) => {
  return { type: "REMOVE_FACT", payload: _id };
};
export const startRemoveFact = (id) => {
  return (dispatch) => {
    axios
      .delete(`/fact/${id}`, {
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
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!",
          }).then((result) => {
            if (!result.isConfirmed) {
              Swal.fire(
                "Cancelled",
                "The task has been not been removed.",
                "error"
              );
            } else {
              const fact = response.data;
              dispatch(FactRemove(fact._id));
              Swal.fire("Removed!", "The task has been removed.", "success");
            }
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Fact Posted By Other User",
        });
      });
  };
};
