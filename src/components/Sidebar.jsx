import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Button,
} from "@material-tailwind/react";
import Avatar from "react-avatar";
import { useNavigate } from "react-router-dom";

const users = [
  {
    id: 1,
    firstName: "Clinton",
    lastName: "Mejia",
  },
  {
    id: 2,
    firstName: "Ricardo",
    lastName: "Perez",
  },
  {
    id: 3,
    firstName: "Jorge",
    lastName: "Gonzalez",
  },
  {
    id: 4,
    firstName: "Luis",
    lastName: "Gutierrez",
  },
];

export function Sidebar() {
  const navigate = useNavigate();
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 ">
      <div className="mb-2 p-4 flex justify-between items-center">
        <Typography variant="h5" color="blue-gray">
          Chat ✏️
        </Typography>
        <Typography>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>
        </Typography>
      </div>
      <List>
        {users.map((user) => (
          <ListItem
            key={user.id}
            onClick={() => navigate(`/${user.id}/${user.firstName}`)}
          >
            <ListItemPrefix>
              <Avatar
                name={user.firstName}
                className="rounded-full text-sm"
                size="40"
                value="86%"
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-semibold">
              {user.firstName} {user.lastName}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
