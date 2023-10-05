import React from "react";

export const MyComponent = () => {
  const [username, setUsername] = React.useState("");

  React.useEffect(() => {
    // Simulating async call
    setTimeout(() => {
      setUsername("Smita");
    }, 1500);
  }, []);

  return (
    <div>
      <h4>{username}</h4>
      <input value={username} onChange={e => setUsername(e.target.value)} />
    </div>
  );
};
