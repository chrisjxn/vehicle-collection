UPDATE users 
SET 
  username = $2, 
  email = $3, 
  first_name = $4, 
  last_name = $5, 
  personal_url = $6 
WHERE id = $1 
RETURNING *;