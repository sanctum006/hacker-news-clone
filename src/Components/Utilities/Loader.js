import { CircularProgress } from "@mui/material";
import { FULFILLED, PENDING, REJECTED } from "../../constants/posts";
import {
  customLoaderContainerStyle,
  customLoaderStyle,
} from "../../constants/styles";

function Loader({ status, result, defaultText }) {
  switch (status) {
    case PENDING: {
      return (
        <div style={customLoaderContainerStyle}>
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
