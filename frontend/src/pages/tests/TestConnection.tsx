import { useEffect, useState } from "react";
import {api} from "../../api";

export default function TestConnection() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("/test")
      .then((res) => setMessage(res.data))
      .catch(() => setMessage("Error connecting to backend"));
  }, []);

  return (
    <div className="p-4 text-xl">
      Backend says: <strong>{message}</strong>
    </div>
  );
}
