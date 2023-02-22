import { useEffect, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResList, User } from "../interfaces/reqRes";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [firstPage, setFirstPage] = useState(true);
  useEffect(() => {
    reqResApi
      .get<ReqResList>("/users")
      .then((resp) => {
        setUsers(resp.data.data);
      })
      .catch(console.log);
  }, []);
  const nextUsers = (number: number) => {
    reqResApi
      .get<ReqResList>(`/users?page=${number++}`)
      .then((resp) => {
        setUsers(resp.data.data);
        setFirstPage(!firstPage);
      })
      .catch(console.log);
  };
  return { nextUsers, users, firstPage };
};
