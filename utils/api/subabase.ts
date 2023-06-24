import { createClient } from "@supabase/supabase-js";

export const supabaseInstance = createClient(
  "https://eqzevynodrcetsihdrji.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxemV2eW5vZHJjZXRzaWhkcmppIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODczMjYxNDEsImV4cCI6MjAwMjkwMjE0MX0.xWhEgfxTFdpx9fr02D8Na_VYKrUGtbvBORZ4d4FAOHI"
);
