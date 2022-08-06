import { CircularProgress } from "@mui/material";
import { FULFILLED, PENDING, REJECTED } from "../../constants/posts";
import { customLoaderStyle } from "../../constants/styles";

function Loader({ status, result, defaultText }) {
  switch (status) {
    case PENDING: {
      return (
        <div style={{ width: "100%", textAlign: "center" }}>
          <CircularProgress style={customLoaderStyle} size={60} />
        </div>
      );
    }

    case FULFILLED: {
      return result;
    }

    case REJECTED: {
      return "OOPS!! Something went wrong!!";
    }

    default: {
      return defaultText;
    }
  }
}

export default Loader;
