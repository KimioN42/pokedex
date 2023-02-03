export const globalStyle = {
  header: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px",
    textAlign: "center" as "center",
  },

  header__title: {
    fontSize: "36px",
    margin: "0",
  },
};

export const formStyle = {
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #333",
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: "5px",
    padding: "20px",
    margin: "20px",
  },
  formInput: {
    flex: "10",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    border: "none",
    outline: "none",
  },
  formSubmit: {
    flex: "1",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    border: "none",
    outline: "none",
    backgroundColor: "#fff",
    color: "#333",
    cursor: "pointer",
  },
  formClear: {
    flex: "1",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    border: "none",
    outline: "none",
    backgroundColor: "#fff",
    color: "#333",
    cursor: "pointer",
    textAlign: "center" as "center",
    fontSize: "13px",
  },
  centerButton: {
    display: "flex",
    justifyContent: "center",
  },
};

export const fontStyle = {
  defaultFont: {
    color: "#fff",
    fontSize: "16px",
    fontFamily: "",
  },
  errorFont: {
    color: "red",
    fontSize: "16px",
  },
};

export const cardStyle = {
  card: {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #333",
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: "5px",
    padding: "20px",
    margin: "20px",
  },
  card__title: {
    fontSize: "24px",
    margin: "0",
  },
  card__content: {
    fontSize: "18px",
    margin: "0",
  },
};
