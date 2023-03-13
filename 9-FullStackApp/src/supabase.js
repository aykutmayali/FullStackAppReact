import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zsjjaeghfdauqsrislhc.supabase.co";
//const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzamphZWdoZmRhdXFzcmlzbGhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYyOTg1NDMsImV4cCI6MTk5MTg3NDU0M30.aJZ9nZ3rlyk_5z121k-KoP4fA4iDe2va1w4X19MGSqg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
