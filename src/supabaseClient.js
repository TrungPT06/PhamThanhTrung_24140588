import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ocateixuzulwmrtxseom.supabase.co";
const SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzZ3h5emJtbXpiY3h6cGh1ZGppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3MjUzMDYsImV4cCI6MjA3NzMwMTMwNn0.YJHK25OGsNH79O9HOEbJR6TscNG3At5drgFJjpfCzlQ";
export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
