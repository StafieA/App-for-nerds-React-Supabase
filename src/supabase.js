import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://egwpeyinjznqbnecnaqy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnd3BleWluanpucWJuZWNuYXF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3MzgzMTUsImV4cCI6MjA0NjMxNDMxNX0.sHFG52QiOY3WSGNEhmrhY1j_0hJ3ijKboCxNl81Bkr4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
