import { CircularProgress } from "@mui/material";
import { FULFILLED, PENDING, REJECTED } from "../../constants/posts";
import { customLoaderStyle } from "../../constants/styles";

function Loader({ status, result }) {
  switch (status) {
    case PENDING: {
      return <CircularProgress style={customLoaderStyle} />;
    }

    case FULFILLED: {
      return result;
    }

    case REJECTED: {
      return "OOPS!! Something went wrong!!";
    }

    default: {
      return "Try typing Something";
    }
  }
}

export default Loader;
