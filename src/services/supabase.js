import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://swxfkvpcbppyqgcrzozo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3eGZrdnBjYnBweXFnY3J6b3pvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzMDU1MjksImV4cCI6MjA1OTg4MTUyOX0.RvLNSjWygUP2cdbA-cmOlWfcIC5BOOy1aq6cdLDWeFw'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;