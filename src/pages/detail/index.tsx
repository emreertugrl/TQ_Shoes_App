import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import api from "../../api";
import { Shoe } from "../../types";
import Error from "../../components/error";
import Loader from "../../components/loader";

const Detail = () => {
  const { id } = useParams();
  const { data, isLoading, error, refetch } = useQuery<Shoe>({
    queryKey: ["shoe", id],
    queryFn: () => api.get(`/shoes/${id}`).then((res) => res.data),
  });
  if (isLoading) return <Loader />;
  if (error) return <Error info={error.message} refetch={refetch} />;

  return <div>Detail</div>;
};

export default Detail;
