import { CircularProgress } from "@mui/material";
import { FULFILLED, PENDING, REJECTED } from "../../constants/posts";
import { customLoaderStyle } from "../../constants/styles";

function Loader({ status, result, defaultText }) {
  switch (status) {
    case PENDING: {
      return <CircularProgress style={customLoaderStyle} size={60} />;
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
