import { createClient } from "@supabase/supabase-js";

//intentionally hardcoded for the sake of demonstration
const supabaseUrl = "https://tfnnhekkbjeqpruawcdr.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmbm5oZWtrYmplcXBydWF3Y2RyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxODA5ODQsImV4cCI6MjA2Mjc1Njk4NH0.Vszy0gd8M5D1l-08FckG5RTP5eM4ebp_WGV7KGH55DI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
