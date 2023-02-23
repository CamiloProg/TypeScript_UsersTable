import { useUsers } from "../hooks/useUsers";

export const Users = () => {
  const { nextUsers, users, firstPage } = useUsers();

  return (
    <>
      <h3>Users</h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id.toString()}>
              <td>
                <img
                  src={user.avatar}
                  alt={user.first_name}
                  style={{ width: 50, borderRadius: 100 }}
                />
              </td>
              <td>
                {user.first_name} {user.last_name}
              </td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {firstPage ? (
        <button className="btn btn-primary" onClick={() => nextUsers(2)}>
          Next
        </button>
      ) : (
        <button className="btn btn-primary" onClick={() => nextUsers(1)}>
          Previus
        </button>
      )}
    </>
  );
};
