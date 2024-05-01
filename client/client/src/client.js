//supabase client to connect it to react to supabase
import { createClient } from "@supabase/supabase-js";

const URL = "https://cgwybapyhlmgmkihomfj.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnd3liYXB5aGxtZ21raWhvbWZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1MTY5NTcsImV4cCI6MjAzMDA5Mjk1N30.Gfi51PSuAySJ7Nw7hnKyNJbRq5aamapdf7bALhoZOGA";

export const supabase = createClient(URL, API_KEY);
