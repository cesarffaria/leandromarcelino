import React from "react";
import { useQuery } from "@apollo/react-hooks";

const Query = ({query, slug}) => {
  const { data, loading, error } = useQuery({query, slug});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  console.log(data);
  return (
    <div>Not in use</div>
    );
};

export default Query;