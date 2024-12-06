import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";

export function Auth() {
  const [showLogin, setShowLogin] = useState(true);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="h-[100vh] w-full flex items-center justify-center">
      <Card color="transparent" shadow={true} className="p-4">
        <Typography variant="h4" color="blue-gray">
          {showLogin ? "Sign In" : "Sign Up"}
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          {showLogin
            ? "Sign in to your account to continue"
            : "Create your account to get started"}
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit}
        >
          <div className="mb-1 flex flex-col gap-6">
            {!showLogin && (
              <>
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  First Name
                </Typography>
                <Input
                  name="firstName"
                  size="lg"
                  placeholder="Clinton"
                  value={formData.firstName || ""}
                  onChange={handleChange}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Last Name
                </Typography>
                <Input
                  name="lastName"
                  size="lg"
                  placeholder="Mejia"
                  value={formData.lastName || ""}
                  onChange={handleChange}
                />
              </>
            )}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email
            </Typography>
            <Input
              name="email"
              type="email"
              size="lg"
              placeholder="mejia@gmail.com"
              value={formData.email || ""}
              onChange={handleChange}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              name="password"
              type="password"
              size="lg"
              placeholder="********"
              value={formData.password || ""}
              onChange={handleChange}
            />
          </div>
          <Button className="mt-6" fullWidth type="submit">
            {showLogin ? "Sign In" : "Sign Up"}
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            {showLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <a
              className="font-medium text-gray-900 cursor-pointer underline"
              onClick={() => {
                setShowLogin(!showLogin);
                setFormData({});
              }}
            >
              {showLogin ? "Sign Up" : "Sign In"}
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
