import { useQuery } from "@tanstack/react-query";
import { getUsersApi } from "../../services/authService";

export default function useUsers() {
  const { data, isLoading } = useQuery({
    queryKey: ["useres"],
    queryFn: getUsersApi,
  });
  const { users } = data || {};

  return { isLoading, users };
}
